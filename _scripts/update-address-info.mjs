import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.join(__dirname, '../src/app/metadata.tsx')

let content = fs.readFileSync(filePath, 'utf8')

// Replace all phone numbers
content = content.replace(/\(806\) 642-7326/g, '+1-555-867-5309')
content = content.replace(/806-642-7326/g, '555-867-5309')

// Replace all street addresses
content = content.replace(/419 Raleigh Ave/g, '742 Evergreen Terrace')

// Replace all city names
content = content.replace(
  /addressLocality: 'Lubbock'/g,
  "addressLocality: 'Springfield'"
)
content = content.replace(/name: 'Lubbock'/g, "name: 'Springfield'")

// Replace state
content = content.replace(/addressRegion: 'TX'/g, "addressRegion: 'OR'")
content = content.replace(/name: 'Texas'/g, "name: 'Oregon'")

// Replace postal code
content = content.replace(/postalCode: '79416'/g, "postalCode: '97477'")

// Replace coordinates
content = content.replace(/latitude: '33\.5779'/g, "latitude: '44.0462'")
content = content.replace(/longitude: '-101\.8552'/g, "longitude: '-123.0236'")

// Replace Google Maps link
content = content.replace(
  /https:\/\/g\.page\/heartbeatmidwifery/g,
  'https://maps.example.com/springfield'
)

// Replace any remaining Lubbock mentions
content = content.replace(/Lubbock/g, 'Springfield')

fs.writeFileSync(filePath, content)

console.log(
  '✓ Updated metadata.tsx with fictitious address and phone information'
)
console.log('  Phone: +1-555-867-5309')
console.log('  Address: 742 Evergreen Terrace, Springfield, OR 97477')
console.log('  Coordinates: 44.0462, -123.0236')
