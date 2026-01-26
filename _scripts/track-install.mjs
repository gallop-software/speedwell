import { readFile } from 'fs/promises'

const controller = new AbortController()
const timeout = setTimeout(() => controller.abort(), 5000)

try {
  const pkg = JSON.parse(await readFile('./package.json', 'utf8'))

  await fetch('https://gallop.software/api/telemetry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal: controller.signal,
    body: JSON.stringify({
      template: 'speedwell',
      version: pkg.version,
      tier: pkg.name.includes('pro') ? 'pro' : 'lite',
      node: process.version,
      timestamp: new Date().toISOString()
    })
  })
} catch {
  // Silent fail - don't block installation
} finally {
  clearTimeout(timeout)
}
