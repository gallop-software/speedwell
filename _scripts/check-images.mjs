#!/usr/bin/env node
// Checks every image URL written in src/ against _data/_studio.json.
//
// Images carry their own URL, width and height in the code; nothing looks them
// up at runtime. This is the check that keeps those numbers true: it fails when
// a URL is not in the library, or when the width and height beside it no longer
// match the file (an image that was replaced or re-cropped).
//
//   npm run images

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const studio = JSON.parse(
  fs.readFileSync(path.join(root, '_data/_studio.json'), 'utf8')
)
const cdns = studio._cdns || []

// Thumbnail suffix for each size recorded in an entry
const VARIANTS = [
  ['sm', '-sm'],
  ['md', '-md'],
  ['lg', '-lg'],
  ['f', ''],
]

/** Every URL the library serves, with the size of that file when it has one */
function libraryUrls() {
  const urls = new Map()
  for (const [key, entry] of Object.entries(studio)) {
    if (key.startsWith('_') || Array.isArray(entry)) continue
    const cdn = cdns[entry.c] || ''
    const processed = VARIANTS.some(([size]) => entry[size])
    if (!processed) {
      // Videos and unprocessed files are served under their own path
      urls.set(`${cdn}${key}`, entry.o || null)
      continue
    }
    const ext = (key.match(/\.\w+$/)?.[0] || '.jpg').toLowerCase()
    // Thumbnails keep .png and .jpeg; everything else is written as .jpg
    const out = ext === '.png' ? '.png' : ext === '.jpeg' ? '.jpeg' : '.jpg'
    const base = key.replace(/\.\w+$/, '')
    for (const [size, suffix] of VARIANTS) {
      if (entry[size]) {
        urls.set(`${cdn}/images${base}${suffix}${out}`, entry[size])
      }
    }
  }
  return urls
}

// Which attributes hold the size of the file named by an attribute
const DIMENSION_ATTRS = {
  src: ['width', 'height'],
  image: ['width', 'height'],
  img: ['width', 'height'],
  imageSrc: ['imageWidth', 'imageHeight'],
  posterImage: ['posterWidth', 'posterHeight'],
}
// Components that must be given a width and height
const NEEDS_DIMENSIONS = new Set(['Image', 'GalleryItem'])

const urls = libraryUrls()
const problems = []
let checked = 0

function numberOf(node) {
  if (!node) return undefined
  if (ts.isJsxExpression(node)) return numberOf(node.expression)
  return ts.isNumericLiteral(node) ? Number(node.text) : undefined
}

/** The width and height written beside a URL, where the code states them */
function statedDimensions(literal) {
  let holder = literal.parent
  if (ts.isJsxExpression(holder)) holder = holder.parent

  if (ts.isJsxAttribute(holder)) {
    const names = DIMENSION_ATTRS[holder.name.getText()]
    if (!names) return null
    const element = holder.parent.parent
    const find = (name) =>
      element.attributes.properties.find(
        (a) => ts.isJsxAttribute(a) && a.name.getText() === name
      )
    const [w, h] = names.map(find)
    return {
      width: numberOf(w?.initializer),
      height: numberOf(h?.initializer),
      present: Boolean(w || h),
      required: NEEDS_DIMENSIONS.has(element.tagName.getText()),
      names,
    }
  }

  if (
    ts.isPropertyAssignment(holder) &&
    ts.isObjectLiteralExpression(holder.parent)
  ) {
    const find = (name) =>
      holder.parent.properties.find(
        (p) => ts.isPropertyAssignment(p) && p.name.getText() === name
      )
    const [w, h] = ['width', 'height'].map(find)
    return {
      width: numberOf(w?.initializer),
      height: numberOf(h?.initializer),
      present: Boolean(w || h),
      required: false,
      names: ['width', 'height'],
    }
  }
  return null
}

function checkFile(file) {
  const text = fs.readFileSync(file, 'utf8')
  if (!cdns.some((cdn) => text.includes(cdn))) return
  const source = ts.createSourceFile(
    file,
    text,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith('x') ? ts.ScriptKind.TSX : ts.ScriptKind.TS
  )
  const report = (node, message) => {
    const { line } = source.getLineAndCharacterOfPosition(node.getStart())
    problems.push(`${path.relative(root, file)}:${line + 1}  ${message}`)
  }

  const visit = (node) => {
    if (
      (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) &&
      cdns.some((cdn) => node.text.startsWith(`${cdn}/`))
    ) {
      checked++
      const url = node.text
      if (!urls.has(url)) {
        report(node, `not in the library: ${url}`)
      } else {
        const file = urls.get(url)
        const stated = statedDimensions(node)
        if (file && stated) {
          const [wName, hName] = stated.names
          const { width, height } = stated
          if (width !== undefined && height !== undefined) {
            // The same shape at another scale is fine: a logo shown at 200px
            // wide. A different shape means the numbers are stale.
            const expected = (width * file.h) / file.w
            if (Math.abs(height - expected) > 1) {
              report(
                node,
                `${wName}/${hName} are ${width}×${height}, but the file is ` +
                  `${file.w}×${file.h}: ${url}`
              )
            }
          } else if (stated.required && !stated.present) {
            report(
              node,
              `missing ${wName}={${file.w}} ${hName}={${file.h}}: ${url}`
            )
          }
        }
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (/\.tsx?$/.test(entry.name)) checkFile(full)
  }
}
walk(path.join(root, 'src'))

if (problems.length) {
  console.error(`\n✖ ${problems.length} image problem(s):\n`)
  for (const problem of problems) console.error(`  ${problem}`)
  console.error(
    '\n  Look the image up in _data/_studio.json and write the URL, width and' +
      '\n  height of the size you want.\n'
  )
  process.exit(1)
}
console.log(`✔ ${checked} image URLs match _data/_studio.json`)
