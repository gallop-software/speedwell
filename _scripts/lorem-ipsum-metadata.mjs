import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.join(__dirname, '../src/app/metadata.tsx')

let content = fs.readFileSync(filePath, 'utf8')

// Replace descriptions with lorem ipsum
content = content.replace(
  /Springfield midwives offering personalized prenatal, birth, and postpartum care at home or in our warm, welcoming birth center\./g,
  'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
)

// Replace service names and descriptions
content = content.replace(/Prenatal Care/g, 'Lorem Ipsum')
content = content.replace(
  /Comprehensive prenatal care throughout pregnancy/g,
  'Dolor sit amet consectetur adipiscing'
)
content = content.replace(/Birth Center Delivery/g, 'Adipiscing Elit')
content = content.replace(
  /Natural birth in our welcoming birth center/g,
  'Sed do eiusmod tempor incididunt'
)
content = content.replace(/Home Birth/g, 'Tempor Incididunt')
content = content.replace(
  /Midwife-attended home birth services/g,
  'Ut labore et dolore magna'
)
content = content.replace(/Water Birth/g, 'Magna Aliqua')
content = content.replace(
  /Safe water birth options at home or birth center/g,
  'Enim ad minim veniam quis'
)
content = content.replace(/Postpartum Care/g, 'Veniam Quis')
content = content.replace(
  /Comprehensive postpartum and newborn care/g,
  'Nostrud exercitation ullamco laboris'
)
content = content.replace(/VBAC Support/g, 'Ullamco Laboris')
content = content.replace(
  /Vaginal birth after cesarean support and care/g,
  'Nisi ut aliquip ex ea'
)
content = content.replace(/Breech Birth/g, 'Commodo Consequat')
content = content.replace(
  /Specialized care for breech presentations/g,
  'Duis aute irure dolor in'
)
content = content.replace(/Twin Birth/g, 'Reprehenderit Voluptate')
content = content.replace(
  /Expert care for twin pregnancies and births/g,
  'Velit esse cillum dolore eu'
)

// Replace knowsAbout items
content = content.replace(/Midwifery/g, 'Lorem ipsum')
content = content.replace(/Water birth/g, 'Dolor sit')
content = content.replace(/Childbirth classes/g, 'Amet consectetur')
content = content.replace(/Birth classes/g, 'Adipiscing elit')
content = content.replace(/Birthing classes/g, 'Sed do eiusmod')
content = content.replace(/Birth education/g, 'Tempor incididunt')
content = content.replace(/Breastfeeding/g, 'Ut labore')
content = content.replace(/Lactation/g, 'Et dolore')
content = content.replace(/UMC labor and delivery/g, 'Magna aliqua enim')

// Replace review author names
content = content.replace(/'Kayce Wright'/g, "'Lorem Ipsum'")
content = content.replace(/'Ria Rodriguez'/g, "'Dolor Sit'")
content = content.replace(/'Patricia O'Hara'/g, "'Amet Consectetur'")
content = content.replace(/'Nicole Klett'/g, "'Adipiscing Elit'")

// Replace review text with lorem ipsum
const reviews = [
  {
    old: /All 3 of our babies have been born at Lorem Ipsum along with Lorem Ipsum helping us through a loss\. Dolor and all the other amazing midwives and students that have seen their way through Lorem Ipsum have been a part of each of our incredible journeys\. We are beyond thankful for the relationships made while bringing our babies earth side\. We are thankful for the support beyond just pregnancy and birth\. We can't recommend Lorem Ipsum enough\. I know that had we not had the support from a very knowledgeable and experienced midwife my birthing experiences would've been much different\./g,
    new: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    old: /We had both our babies at lorem ipsum and could not recommend it enough! The midwives took such good care of us and welcomed us with open arms! Sit always greeted us with a smile and a positive attitude! They made us feel like family! Dolor and Amet delivered my last baby and it was such a peaceful experience\. These ladies really care for their patients! We hope to be back for our next baby!/g,
    new: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure reprehenderit in voluptate velit esse cillum dolore.',
  },
  {
    old: /I had an absolutely wonderful experience getting my care and delivering my baby at Speedwell\. The midwives and staff were extremely professional, attentive to my every need, very patient with all of my questions and made me feel very comfortable\. My labor and delivery experience was great! I am very appreciative of the fact that the midwives were able to accommodate my needs and desires while still providing quality and safe care to me and my baby\. Thank you!/g,
    new: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    old: /The people at Speedwell are the sweetest ladies ever, so kind and considerate and were there for every question and concern I had\. They were so helpful in giving advice on supplements to take and what foods to eat to support my pregnancy and birth and it made a huge difference! At my birth they were so reassuring and knew exactly what they were doing and I have never felt so seen and cared for\. My baby was born beautiful and healthy and that is thanks to them\. As a first time Mom I couldn't have done this without them! I definitely recommend Speedwell!/g,
    new: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa.',
  },
]

reviews.forEach(({ old, new: newText }) => {
  content = content.replace(old, newText)
})

// Replace slogan
content = content.replace(
  /Personal, respectful care rooted in trust/g,
  'Lorem ipsum dolor sit amet'
)

// Replace contact type
content = content.replace(/customer service/g, 'lorem ipsum')

// Replace language
content = content.replace(
  /availableLanguage: 'English'/g,
  "availableLanguage: 'Lorem'"
)

fs.writeFileSync(filePath, content)

console.log('✓ Updated metadata.tsx with lorem ipsum text for all data')
console.log('  - Service names and descriptions')
console.log('  - Review author names')
console.log('  - Review text content')
console.log('  - Slogan and other text')
