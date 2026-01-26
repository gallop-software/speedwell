import { readFile } from 'fs/promises'

try {
  const pkg = JSON.parse(await readFile('./package.json', 'utf8'))

  await fetch('https://gallop.software/api/telemetry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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
}
