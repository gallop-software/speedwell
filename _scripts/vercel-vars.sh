#!/usr/bin/env bash
set -euo pipefail

# Sync env vars between .env.production and Vercel.
#
# Direction:
#   push  (default) — upsert vars FROM .env.production TO Vercel (encrypted),
#                     targeting production AND preview by default.
#                     Uses the Vercel REST API, so it needs an API token
#                     (prompted for once, then saved to .vercel/vars-token).
#   pull            — download your OWN production vars FROM Vercel TO
#                     .env.production. Vercel-injected system vars (VERCEL_*,
#                     TURBO_*, etc.) are excluded. Uses the Vercel CLI, so it
#                     needs NO token — just a linked, logged-in project.
#                     The existing .env.production is backed up to
#                     .env.production-{timestamp} first.
#
# Usage:
#   npm run vars               # push to production + preview
#   npm run vars:push          # push to production + preview
#   npm run vars:pull          # pull production vars into .env.production
#   ./_scripts/vercel-vars.sh push "production"   # override push targets
#   ./_scripts/vercel-vars.sh pull

# --- parse direction (first positional arg), default to push
DIRECTION="push"
case "${1:-}" in
  push|pull) DIRECTION="$1"; shift ;;
esac

TARGETS_CSV="${1:-production,preview}"    # development,preview,production (comma-separated, push only)
ENV_FILE=".env.production"
VERCEL_BIN="${VERCEL_BIN:-vercel}"
ENV_TYPE="encrypted"                      # store pushed values as encrypted secrets

# --- sanity checks
if ! command -v "$VERCEL_BIN" >/dev/null 2>&1; then
  echo "Error: Vercel CLI not found. Install with: npm i -g vercel" >&2
  exit 1
fi
if ! command -v jq >/dev/null 2>&1; then
  echo "Error: 'jq' is required. Install with: brew install jq" >&2
  exit 1
fi
if [ "$DIRECTION" = "push" ] && [ ! -f "$ENV_FILE" ]; then
  echo "Error: environment file not found: $ENV_FILE" >&2
  exit 1
fi

# --- ensure the project is linked. Git-connected projects store the link in
#     .vercel/repo.json (a projects[] array, monorepo-aware).
if [ ! -f ".vercel/repo.json" ]; then
  echo "Project not linked. Running 'vercel link' to select scope and project..."
  "$VERCEL_BIN" link
fi
if [ ! -f ".vercel/repo.json" ]; then
  echo "Error: '.vercel/repo.json' not found after linking attempt." >&2
  exit 1
fi

# ============================================================================
# PULL — download your own production vars into .env.production (no token)
# ============================================================================
if [ "$DIRECTION" = "pull" ]; then
  # --- back up the existing .env.production before overwriting it
  if [ -f "$ENV_FILE" ]; then
    TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
    BACKUP_FILE="${ENV_FILE}-${TIMESTAMP}"
    cp "$ENV_FILE" "$BACKUP_FILE"
    echo "Backed up existing $ENV_FILE to $BACKUP_FILE"
  fi

  echo "Pulling production variables from Vercel into $ENV_FILE"

  # --- allowlist: the project's OWN production var keys. `env ls` never lists
  #     Vercel-injected system vars, so those are naturally excluded.
  allowed_keys="$("$VERCEL_BIN" env ls production --format json 2>/dev/null | jq -r '
    .envs[]
    | select(.type != "system")
    | select(.target != null and (.target | index("production")))
    | .key
  ' | sort -u)"

  if [ -z "$allowed_keys" ]; then
    echo "Error: no production variables found for the linked project." >&2
    exit 1
  fi

  # --- pull decrypted values via the CLI into a temp file
  tmp_pull="$(mktemp)"
  "$VERCEL_BIN" env pull "$tmp_pull" --environment=production --yes

  # --- write only the project's own vars into .env.production
  : > "$ENV_FILE"
  count=0
  while IFS= read -r line || [ -n "$line" ]; do
    case "$line" in
      ''|\#*) continue ;;                 # skip blanks + comments (e.g. Vercel header)
    esac
    key="${line%%=*}"
    if grep -qxF "$key" <<< "$allowed_keys"; then
      printf '%s\n' "$line" >> "$ENV_FILE"
      count=$((count + 1))
    fi
  done < "$tmp_pull"
  rm -f "$tmp_pull"

  echo "Wrote $count production variable(s) to $ENV_FILE"
  echo "Done."
  exit 0
fi

# ============================================================================
# PUSH — upsert vars from .env.production to Vercel (REST API + token)
# ============================================================================

# --- read project + org IDs from repo.json (this directory, else first project)
PROJECT_ID="$(jq -r '(.projects[] | select(.directory==".") | .id) // .projects[0].id // empty' .vercel/repo.json)"
ORG_ID="$(jq -r '(.projects[] | select(.directory==".") | .orgId) // .projects[0].orgId // empty' .vercel/repo.json)"
if [ -z "${PROJECT_ID:-}" ]; then
  echo "Error: could not determine projectId from .vercel/repo.json" >&2
  exit 1
fi

# --- resolve a Vercel API token (needed for the REST upsert)
TOKEN_FILE=".vercel/vars-token"
STORED_TOKEN=""
[ -f "$TOKEN_FILE" ] && STORED_TOKEN="$(tr -d '[:space:]' < "$TOKEN_FILE")"

if [ -n "$STORED_TOKEN" ]; then
  VERCEL_TOKEN="$STORED_TOKEN"
elif [ -n "${VERCEL_TOKEN:-}" ]; then
  : # use from environment
else
  printf "Enter your Vercel token (create one at https://vercel.com/account/tokens): "
  read -r VERCEL_TOKEN
  if [ -z "$VERCEL_TOKEN" ]; then
    echo "Error: Vercel token is required for push." >&2
    exit 1
  fi
fi

# --- Build API base with team scope
API_BASE="https://api.vercel.com"
TEAM_QS=""
if [[ -n "${ORG_ID:-}" && "$ORG_ID" == team_* ]]; then
  TEAM_QS="&teamId=${ORG_ID}"
fi

# --- Preflight: validate token before saving it
PREFLIGHT_URL="${API_BASE}/v10/projects/${PROJECT_ID}?${TEAM_QS#&}"
pre_code="$(curl -sS -o /tmp/vercel_pre.$$ -w '%{http_code}' \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  "$PREFLIGHT_URL")"

if [ "$pre_code" = "401" ]; then
  echo "Unauthorized: Your VERCEL_TOKEN is invalid or expired. It will NOT be saved." >&2
  cat /tmp/vercel_pre.$$ >&2 || true
  rm -f /tmp/vercel_pre.$$
  exit 1
elif [ "$pre_code" = "403" ]; then
  echo "Forbidden: Your token lacks access to this project/team. It will NOT be saved." >&2
  cat /tmp/vercel_pre.$$ >&2 || true
  rm -f /tmp/vercel_pre.$$
  exit 1
elif ! [[ "$pre_code" =~ ^2 ]]; then
  echo "Preflight failed (HTTP $pre_code). Response:" >&2
  cat /tmp/vercel_pre.$$ >&2 || true
  rm -f /tmp/vercel_pre.$$
  exit 1
fi
rm -f /tmp/vercel_pre.$$

# --- If token is valid, save it to .vercel/vars-token (for future use).
#     .vercel/ is gitignored, so the token is never committed.
if [ -z "$STORED_TOKEN" ]; then
  ( umask 077; printf '%s\n' "$VERCEL_TOKEN" > "$TOKEN_FILE" )
  echo "Token validated and saved to $TOKEN_FILE"
fi

# --- prepare targets JSON
IFS=',' read -r -a TARGETS <<< "$TARGETS_CSV"
TARGETS_JSON="$(printf '%s\n' "${TARGETS[@]}" | awk 'BEGIN{printf "["; first=1} {if(!first)printf ","; printf "\""$0"\""; first=0} END{printf "]"}')"

API_URL="${API_BASE}/v10/projects/${PROJECT_ID}/env?upsert=true${TEAM_QS}"

echo "Upserting encrypted variables from $ENV_FILE to targets: ${TARGETS[*]} (projectId: $PROJECT_ID${ORG_ID:+, orgId: $ORG_ID})"

# --- helper: strip surrounding quotes
strip_quotes () {
  local s="$1"
  if [[ "$s" =~ ^\".*\"$ ]]; then echo "${s:1:${#s}-2}"
  elif [[ "$s" =~ ^\'.*\'$ ]]; then echo "${s:1:${#s}-2}"
  else echo "$s"; fi
}

# --- loop through .env.production and upsert via API
while IFS= read -r raw || [ -n "$raw" ]; do
  line="$raw"
  line="${line#"${line%%[![:space:]]*}"}"
  line="${line%"${line##*[![:space:]]}"}"
  [[ -z "$line" || "${line:0:1}" == "#" ]] && continue
  [[ "$line" =~ ^export[[:space:]]+ ]] && line="${line#export }"
  [[ "$line" != *"="* ]] && { echo "Skipping invalid line: $line" >&2; continue; }

  key="${line%%=*}"
  val="${line#*=}"
  key="${key#"${key%%[![:space:]]*}"}"; key="${key%"${key##*[![:space:]]}"}"
  val="${val#"${val%%[![:space:]]*}"}"; val="${val%"${val##*[![:space:]]}"}"
  [[ -z "$key" ]] && continue
  val="$(strip_quotes "$val")"
  [[ -z "$val" ]] && { echo "Skipping $key (empty value)"; continue; }

  payload=$(cat <<JSON
{
  "key": "$key",
  "value": "$val",
  "type": "$ENV_TYPE",
  "target": $TARGETS_JSON
}
JSON
)

  http_code="$(curl -sS -o /tmp/vercel_env_resp.$$ -w '%{http_code}' \
    -H "Authorization: Bearer $VERCEL_TOKEN" \
    -H "Content-Type: application/json" \
    -X POST "$API_URL" \
    -d "$payload")"

  if [ "$http_code" = "401" ]; then
    echo "Unauthorized while upserting $key: token invalid or expired." >&2
    cat /tmp/vercel_env_resp.$$ >&2 || true
    rm -f /tmp/vercel_env_resp.$$
    exit 1
  elif [ "$http_code" = "403" ]; then
    echo "Forbidden while upserting $key: token lacks access to project/team." >&2
    cat /tmp/vercel_env_resp.$$ >&2 || true
    rm -f /tmp/vercel_env_resp.$$
    exit 1
  elif ! [[ "$http_code" =~ ^2 ]]; then
    echo "Failed to upsert $key (HTTP $http_code)"; cat /tmp/vercel_env_resp.$$ >&2
  else
    echo "$key upserted"
  fi
  rm -f /tmp/vercel_env_resp.$$
done < "$ENV_FILE"

echo "Done."
