import { readFile, writeFile, access } from 'fs/promises'

const MARKER_FILE = '.telemetry-sent'

// Check if already sent
try {
  await access(MARKER_FILE)
  process.exit(0) // Already sent, skip
} catch {
  // File doesn't exist, continue
}

const controller = new AbortController()
const timeout = setTimeout(() => controller.abort(), 5000)

try {
  const pkg = JSON.parse(await readFile('./package.json', 'utf8'))

  const res = await fetch('https://gallop.software/api/telemetry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal: controller.signal,
    body: JSON.stringify({
      template: 'speedwell',
      version: pkg.version,
      tier: pkg.name.includes('pro') ? 'pro' : 'lite',
      node: process.version,
      environment: process.env.CI ? 'ci' : process.env.VERCEL ? 'vercel' : 'local',
      timestamp: new Date().toISOString()
    })
  })

  if (res.ok) {
    await writeFile(MARKER_FILE, new Date().toISOString())
  }
} catch {
  // Silent fail - don't block installation
} finally {
  clearTimeout(timeout)
}
