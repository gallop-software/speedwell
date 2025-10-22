import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const postsDir = path.join(__dirname, '../src/app/markdown/post')

// Lorem ipsum word pool
const loremWords = [
  'lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'sed',
  'do',
  'eiusmod',
  'tempor',
  'incididunt',
  'ut',
  'labore',
  'et',
  'dolore',
  'magna',
  'aliqua',
  'enim',
  'ad',
  'minim',
  'veniam',
  'quis',
  'nostrud',
  'exercitation',
  'ullamco',
  'laboris',
  'nisi',
  'aliquip',
  'ex',
  'ea',
  'commodo',
  'consequat',
  'duis',
  'aute',
  'irure',
  'reprehenderit',
  'voluptate',
  'velit',
  'esse',
  'cillum',
  'fugiat',
  'nulla',
  'pariatur',
  'excepteur',
  'sint',
  'occaecat',
  'cupidatat',
  'non',
  'proident',
  'sunt',
  'culpa',
  'qui',
  'officia',
  'deserunt',
  'mollit',
  'anim',
  'id',
  'est',
  'laborum',
  'in',
  'qui',
  'dolore',
  'eu',
  'fugiat',
]

// Generate lorem ipsum text of specific length
function generateLoremText(targetLength, preserveCase = false) {
  let text = ''
  let wordIndex = 0

  while (text.length < targetLength) {
    const word = loremWords[wordIndex % loremWords.length]

    if (text.length === 0) {
      // First word - capitalize
      text = preserveCase ? word.charAt(0).toUpperCase() + word.slice(1) : word
    } else {
      // Add space before word
      if (text.length + 1 + word.length <= targetLength) {
        text += ' ' + word
      } else {
        // Need to pad with remaining characters
        const remaining = targetLength - text.length - 1
        if (remaining > 0) {
          text += ' ' + word.substring(0, remaining)
        }
        break
      }
    }
    wordIndex++
  }

  // Trim to exact length if needed
  return text.substring(0, targetLength)
}

// English text patterns to replace (content between Image/Gallery and Button components)
const englishPatterns = [
  {
    file: 'fugiat-nulla-pariatur-excepteur.mdx',
    old: `✨Join us today for the grand opening of our new location at 419 Raleigh Ave. The party starts at 10 with snacks and free giveaways.We can't wait to share with you the joy of what the Lord has done!Each adult will be given an entry into the giveaways and prizes can be gifted. Winners to be announced Monday 😊📸: [@woven.photo](https://www.instagram.com/woven.photo/)`,
  },
  {
    file: 'aliquip-commodo-consequat-duis.mdx',
    old: `! After a full day of clinic, we welcomed TWO baby boys (born to two separate families) within less than three hours of each other. Welcome earthside, little loves💙🩵Baby boy 1: 8lbs 12oz Baby boy 2: 7lbs 12oz`,
  },
  {
    file: 'irure-dolor-reprehenderit-voluptate.mdx',
    old: `- One birth session (full coverage, fresh 48 session, a CD of social media resolution files)
- One maternity session (maternity gown, up to 2 hour session)
- One newborn session (props and outfits included)Stop by our grand opening this Saturday and enter to win!`,
  },
  {
    file: 'tempor-incididunt-magna-aliqua.mdx',
    old: `- Prenatal visits (average 12) and postpartum visits (average 5)
- Pregnancy & nutritional counseling
- Birth education class
- Access to our lending library
- Routine lab work
- 21 week anatomy sonogram
- Labor and delivery
- Water birth
- Use of nitrous oxide during labor
- Herbal bath for mom and baby
- Newborn care for 6 weeksCome see us this Saturday starting at 10am for your chance to win! 💗419 Raleigh Ave Lubbock, TX 79416`,
  },
  {
    file: 'voluptate-velit-esse-cillum.mdx',
    old: `other, Midwife, Clinical DirectorCarmen brings over 18 years of midwifery experience to this practice and a wealth of knowledge from her own motherhood journey. As a mom of four, she has experienced home, birth center, and hospital births of her own. Her clinical experience overseas and working locally with a variety of practitioners and clientele makes her a compassionate and resourceful midwife.Fun facts: -loves chia tea lattes -has lived in 4 countries -is the daughter of a twin, married a twin and gave birth to twin daughters -enjoys outdoor adventures with her family -envisioned the new Heartbeat birth center when she was 19 years old -delivered 1,200+ babies since she began midwiferyHaven't met this amazing lady? Come chat with her at our grand opening Nov. 5th at 10am`,
  },
]

let updatedCount = 0

englishPatterns.forEach(({ file, old }) => {
  const filePath = path.join(postsDir, file)

  if (!fs.existsSync(filePath)) {
    console.log(`⚠ File not found: ${file}`)
    return
  }

  let content = fs.readFileSync(filePath, 'utf8')

  // Generate lorem text of same length
  const loremText = generateLoremText(old.length, true)

  // Replace the text
  content = content.replace(old, loremText)

  fs.writeFileSync(filePath, content)
  updatedCount++

  console.log(`✓ ${file}`)
  console.log(`  Original length: ${old.length} chars`)
  console.log(`  Lorem length: ${loremText.length} chars`)
  console.log()
})

console.log(`Done! Updated ${updatedCount} blog posts with lorem ipsum text.`)
