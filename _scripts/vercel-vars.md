# Sync Environment Variables with Vercel

Sync environment variables between `.env.production` and your Vercel project. Supports two directions:

- **push** (default) — upsert variables **from** `.env.production` **to** Vercel (stored as encrypted secrets), targeting **production and preview**. Uses the Vercel REST API, so it needs an API token (prompted once, then saved).
- **pull** — download your **own** production variables **from** Vercel **to** `.env.production`. Uses the Vercel CLI, so it needs **no token** — just a linked, logged-in project.

**Tier:** Free  
**File:** `_scripts/vercel-vars.sh`

---

## Prerequisites

- **Vercel CLI** installed globally + logged in: `npm i -g vercel` then `vercel login`
- **Vercel project linked** (the script will prompt you to run `vercel link` if not already done)
- **jq** installed: `brew install jq`
- **Vercel API token** — **push only** (get one from [vercel.com/account/tokens](https://vercel.com/account/tokens)); `pull` needs no token

## Usage

### Push to production + preview (default)

```bash
npm run vars
# or
npm run vars:push
```

### Push to specific environment(s)

```bash
./_scripts/vercel-vars.sh push "production"
./_scripts/vercel-vars.sh push "preview,production"
```

### Pull production vars into `.env.production`

```bash
npm run vars:pull
# or
./_scripts/vercel-vars.sh pull
```

## How Push Works

1. Reads variables from `.env.production`
2. Links to your Vercel project (if not already linked) and reads its IDs from `.vercel/repo.json`
3. Validates your Vercel token
4. Upserts each variable as an encrypted secret via the Vercel REST API
5. Saves your token to `.vercel/vars-token` for future use (this file is gitignored)

## How Pull Works

1. Links to your Vercel project (if not already linked) — no token required
2. **Backs up** the current `.env.production` to `.env.production-{timestamp}`
   (e.g. `.env.production-20260721-210530`) — nothing is overwritten in place
3. Lists your **own** production variable names via `vercel env ls production --format json`
   (Vercel-injected system vars like `VERCEL_*` are never listed here)
4. Pulls the decrypted values via `vercel env pull`
5. Writes only your own production variables into `.env.production` as `KEY="value"`

> Note: only variables you defined are written. Vercel's built-in system variables
> (`VERCEL_*`, `VERCEL_GIT_*`, `TURBO_*`, etc.) are filtered out. Variables marked
> **sensitive** cannot be decrypted and are skipped.

## First Run

- **push** — the script prompts you to run `vercel link` (if needed), then asks for a
  Vercel API token and validates it before saving to `.vercel/vars-token`.
- **pull** — the script prompts you to run `vercel link` (if needed). No token is asked
  for; it relies on your `vercel login` session.

## Environment File Format

The script reads/writes `.env.production`:

```bash
# Comments are ignored (push)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
MAILGUN_API_KEY=your-api-key-here
```

## Troubleshooting

### "Vercel CLI not found"

Install the Vercel CLI globally:

```bash
npm i -g vercel
```

### "'jq' is required"

Install jq:

```bash
brew install jq
```

### "Unauthorized" or "Forbidden" (push)

Your Vercel token is invalid or lacks permissions. Generate a new token at [vercel.com/account/tokens](https://vercel.com/account/tokens), then delete `.vercel/vars-token` so the script re-prompts.

### Pull errors about auth

`pull` uses your Vercel CLI login, not a token. Run `vercel login` (and `vercel link`) and try again.

### Pull wrote the wrong project's vars

The direction of both push and pull follows the linked project in `.vercel/repo.json`. Run `vercel link` to point this directory at the correct project.

### "Environment file not found"

Create a `.env.production` file in your project root. You can copy from `.env.production.sample`:

```bash
cp .env.production.sample .env.production
```

Then fill in your real values. (Only required for `push` — `pull` creates the file for you.)
