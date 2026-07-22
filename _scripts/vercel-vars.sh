#!/usr/bin/env bash
set -euo pipefail

# Sync env vars between .env.production and Vercel using the REST API.
#
# Direction:
#   push  (default) — upsert vars FROM .env.production TO Vercel (encrypted),
#                     targeting production AND preview by default
#   pull            — download production vars FROM Vercel TO .env.production
#                     (the existing .env.production is backed up to
#                      .env.production-{timestamp} first)
#
# Usage:
#   npm run vars               # push to production + preview
#   npm run vars:push          # push to production + preview
#   npm run vars:pull          # pull production vars into .env.production
#   ./_scripts/vercel-vars.sh push "production"   # override targets
#   ./_scripts/vercel-vars.sh pull

# --- parse direction (first positional arg), default to push
DIRECTION="push"
case "${1:-}" in
  push|pull) DIRECTION="$1"; shift ;;
esac

TARGETS_CSV="${1:-production,preview}"    # development,preview,production (comma-separated, push only)
ENV_FILE=".env.production"
VERCEL_BIN="${VERCEL_BIN:-vercel}"
ENV_TYPE="encrypted"                     # store as encrypted secrets

# --- sanity checks
if ! command -v "$VERCEL_BIN" >/dev/null 2>&1; then
  echo "Error: Vercel CLI not found. Install with: npm i -g vercel" >&2
  exit 1
fi
if [ "$DIRECTION" = "push" ] && [ ! -f "$ENV_FILE" ]; then
  echo "Error: environment file not found: $ENV_FILE" >&2
  exit 1
fi
if [ "$DIRECTION" = "pull" ] && ! command -v jq >/dev/null 2>&1; then
  echo "Error: 'jq' is required for pull. Install with: brew install jq" >&2
  exit 1
fi

# --- ensure project is linked (creates .vercel/project.json)
if [ ! -f ".vercel/project.json" ]; then
  echo "Project not linked. Running 'vercel link' to select scope and project..."
  "$VERCEL_BIN" link
fi
if [ ! -f ".vercel/project.json" ]; then
  echo "Error: '.vercel/project.json' not found after linking attempt." >&2
  exit 1
fi

# --- read IDs and optional token from .vercel/project.json
read_project_json() { cat .vercel/project.json; }

if command -v jq >/dev/null 2>&1; then
  PROJECT_ID="$(read_project_json | jq -r '.projectId // .project?.id // empty')"
  ORG_ID="$(read_project_json | jq -r '.orgId // .org?.id // .project?.orgId // empty')"
  STORED_TOKEN="$(read_project_json | jq -r '.token // empty')"
else
  PROJECT_ID="$(grep -oE '"projectId"[[:space:]]*:[[:space:]]*"[^"]*"' .vercel/project.json | head -1 | sed 's/.*:"\([^"]*\)".*/\1/')"
  ORG_ID="$(grep -oE '"orgId"[[:space:]]*:[[:space:]]*"[^"]*"' .vercel/project.json | head -1 | sed 's/.*:"\([^"]*\)".*/\1/')"
  STORED_TOKEN="$(grep -oE '"token"[[:space:]]*:[[:space:]]*"[^"]*"' .vercel/project.json | head -1 | sed 's/.*:"\([^"]*\)".*/\1/')" || true
fi

if [ -z "${PROJECT_ID:-}" ]; then
  echo "Error: 'projectId' missing in .vercel/project.json" >&2
  exit 1
fi

# --- prompt for token if missing, but DON'T save yet
if [ -n "${STORED_TOKEN:-}" ]; then
  VERCEL_TOKEN="$STORED_TOKEN"
elif [ -n "${VERCEL_TOKEN:-}" ]; then
  : # use from environment
else
  printf "Enter your Vercel token: "
  read -r VERCEL_TOKEN
  if [ -z "$VERCEL_TOKEN" ]; then
    echo "Error: Vercel token is required." >&2
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

# --- If token is valid, save it to .vercel/project.json (for future use)
if [ -z "${STORED_TOKEN:-}" ]; then
  if command -v jq >/dev/null 2>&1; then
    tmpfile="$(mktemp)"
    jq --arg token "$VERCEL_TOKEN" '. + {token: $token}' .vercel/project.json > "$tmpfile" && mv "$tmpfile" .vercel/project.json
  else
    tmpfile="$(mktemp)"
    printf '{"projectId":"%s","orgId":"%s","token":"%s"}\n' "${PROJECT_ID}" "${ORG_ID:-}" "$VERCEL_TOKEN" > "$tmpfile"
    mv "$tmpfile" .vercel/project.json
  fi
  echo "Token validated and saved to .vercel/project.json"
fi

# ============================================================================
# PULL — download production vars from Vercel into .env.production
# ============================================================================
if [ "$DIRECTION" = "pull" ]; then
  PULL_URL="${API_BASE}/v9/projects/${PROJECT_ID}/env?decrypt=true${TEAM_QS}"

  echo "Pulling production variables from Vercel (projectId: $PROJECT_ID${ORG_ID:+, orgId: $ORG_ID})"

  http_code="$(curl -sS -o /tmp/vercel_pull.$$ -w '%{http_code}' \
    -H "Authorization: Bearer $VERCEL_TOKEN" \
    "$PULL_URL")"

  if ! [[ "$http_code" =~ ^2 ]]; then
    echo "Failed to fetch env vars (HTTP $http_code). Response:" >&2
    cat /tmp/vercel_pull.$$ >&2 || true
    rm -f /tmp/vercel_pull.$$
    exit 1
  fi

  # --- back up the existing .env.production before overwriting it
  if [ -f "$ENV_FILE" ]; then
    TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
    BACKUP_FILE="${ENV_FILE}-${TIMESTAMP}"
    cp "$ENV_FILE" "$BACKUP_FILE"
    echo "Backed up existing $ENV_FILE to $BACKUP_FILE"
  fi

  # --- write all production vars into .env.production (KEY="value")
  tmpout="$(mktemp)"
  jq -r '
    .envs[]
    | select(.target != null and (.target | index("production")))
    | select(.value != null)
    | "\(.key)=\"\(.value | gsub("\\\\"; "\\\\") | gsub("\""; "\\\""))\""
  ' /tmp/vercel_pull.$$ > "$tmpout"

  count="$(wc -l < "$tmpout" | tr -d '[:space:]')"
  mv "$tmpout" "$ENV_FILE"
  rm -f /tmp/vercel_pull.$$

  echo "Wrote $count production variable(s) to $ENV_FILE"
  echo "Done."
  exit 0
fi

# ============================================================================
# PUSH — upsert vars from .env.production to Vercel (encrypted)
# ============================================================================

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
