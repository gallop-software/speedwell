# Sync Environment Variables with Vercel

Sync environment variables between `.env.production` and your Vercel project using the Vercel REST API. Supports two directions:

- **push** (default) — upsert variables **from** `.env.production` **to** Vercel (stored as encrypted secrets), targeting **production and preview**
- **pull** — download production variables **from** Vercel **to** `.env.production`

**Tier:** Free  
**File:** `_scripts/vercel-vars.sh`

---

## Prerequisites

- **Vercel CLI** installed globally: `npm i -g vercel`
- **Vercel project linked** (the script will prompt you to link if not already done)
- **Vercel API token** (get one from [vercel.com/account/tokens](https://vercel.com/account/tokens))
- **jq** installed (required for `pull`): `brew install jq`

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
2. Links to your Vercel project (if not already linked)
3. Validates your Vercel token
4. Upserts each variable as an encrypted secret via the Vercel API
5. Saves your token to `.vercel/project.json` for future use

## How Pull Works

1. Links to your Vercel project (if not already linked) and validates your token
2. **Backs up** the current `.env.production` to `.env.production-{timestamp}`
   (e.g. `.env.production-20260721-210530`) — nothing is overwritten in place
3. Fetches the list of your **own** production variables from the Vercel API
   (this list excludes Vercel-injected system vars like `VERCEL_*`)
4. Pulls the decrypted values via the Vercel CLI (`vercel env pull`)
5. Writes only your own production variables into `.env.production` as `KEY="value"`

> Note: only variables you defined are written. Vercel's built-in system variables
> (`VERCEL_*`, `VERCEL_GIT_*`, `TURBO_*`, etc.) are filtered out. Variables marked
> **sensitive** cannot be decrypted and are skipped.

## First Run

On first run, the script will:

1. Prompt you to run `vercel link` to connect to your project
2. Ask for your Vercel API token
3. Validate the token before saving it

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

### "'jq' is required for pull"

Install jq:

```bash
brew install jq
```

### "Unauthorized" or "Forbidden"

Your Vercel token is invalid or lacks permissions. Generate a new token at [vercel.com/account/tokens](https://vercel.com/account/tokens).

### "Environment file not found"

Create a `.env.production` file in your project root. You can copy from `.env.production.sample`:

```bash
cp .env.production.sample .env.production
```

Then fill in your real values. (Only required for `push` — `pull` creates the file for you.)
