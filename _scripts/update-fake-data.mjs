import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.join(__dirname, '../src/app/metadata.tsx')

let content = fs.readFileSync(filePath, 'utf8')

// Replace descriptions
content = content.replace(
  /Lubbock midwives offering personalized prenatal, birth, and postpartum care at home or in our warm, welcoming birth center\./g,
  'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud.'
)

// Replace phone numbers
content = content.replace(/\(806\) 642-7326/g, '+1-555-0123')
content = content.replace(/806-642-7326/g, '555-0123')

// Replace street addresses
content = content.replace(/419 Raleigh Ave/g, '123 Lorem Ipsum Boulevard')

// Replace city names
content = content.replace(
  /addressLocality: 'Lubbock'/g,
  "addressLocality: 'Dolor City'"
)
content = content.replace(/name: 'Lubbock'/g, "name: 'Dolor City'")

// Replace state
content = content.replace(/addressRegion: 'TX'/g, "addressRegion: 'DC'")
content = content.replace(/name: 'Texas'/g, "name: 'Lorem State'")

// Replace postal code
content = content.replace(/postalCode: '79416'/g, "postalCode: '10001'")

// Replace coordinates
content = content.replace(/latitude: '33\.5779'/g, "latitude: '40.7128'")
content = content.replace(/longitude: '-101\.8552'/g, "longitude: '-74.0060'")

// Replace Google Maps links
content = content.replace(
  /https:\/\/g\.page\/heartbeatmidwifery/g,
  'https://maps.example.com/lorem-ipsum'
)

// Replace any remaining location references
content = content.replace(/Lubbock/g, 'Dolor City')
content = content.replace(/Texas/g, 'Lorem State')

fs.writeFileSync(filePath, content)

console.log(
  '✓ Updated metadata.tsx with fake address and lorem ipsum descriptions'
)
console.log('  Phone: +1-555-0123')
console.log('  Address: 123 Lorem Ipsum Boulevard, Dolor City, DC 10001')
console.log('  Coordinates: 40.7128, -74.0060')
console.log('  Description: Lorem ipsum dolor sit amet...')
