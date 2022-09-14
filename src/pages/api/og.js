import { createReadStream, readFileSync } from 'fs'
import { join } from 'path'
import * as cheerio from 'cheerio'
import { https } from 'follow-redirects'
import { Canvas, Image } from '@napi-rs/canvas'
import opentype from 'opentype.js'

const WIDTH = 1280
const HEIGHT = 720
const PADDING = 112

const fontExtraBold = opentype.loadSync(resolve('Inter-ExtraBold.otf'))
const fontSemiBold = opentype.loadSync(resolve('Inter-SemiBold.otf'))

const imageOverrides = [{ pattern: '/', image: resolve('og-default.jpg'), type: 'image/jpeg' }]

const charVariants = {
  // https://github.com/rsms/inter/blob/master/src/features/cv02-four.fea
  '\u0034': '\uE06E',
  '\uE075': '\uE07E',
  '\uE142': '\uE14B',
  '\u2783': '\uE12E',

  // https://github.com/rsms/inter/blob/master/src/features/cv03-six.fea
  '\u0036': '\uE06F',
  '\uE077': '\uE07F',
  '\uE144': '\uE14C',
  '\u2785': '\uE12F',

  // https://github.com/rsms/inter/blob/master/src/features/cv04-nine.fea
  '\u0039': '\uE070',
  '\uE07A': '\uE080',
  '\uE147': '\uE14D',
  '\u2788': '\uE130',

  // https://github.com/rsms/inter/blob/master/src/features/cv11-single-storey-a.fea
  '\u0061': '\uE02C',
  '\u00E1': '\uE02D',
  '\u0103': '\uE02E',
  '\u1EAF': '\uE02F',
  '\u1EB7': '\uE030',
  '\u1EB1': '\uE031',
  '\u1EB3': '\uE032',
  '\u1EB5': '\uE033',
  '\u01CE': '\uE034',
  '\u00E2': '\uE035',
  '\u1EA5': '\uE036',
  '\u1EAD': '\uE037',
  '\u1EA7': '\uE038',
  '\u1EA9': '\uE039',
  '\u1EAB': '\uE03A',
  '\u0201': '\uE03B',
  '\u00E4': '\uE03C',
  '\u01DF': '\uE03D',
  '\u0227': '\uE03E',
  '\u1EA1': '\uE03F',
  '\u01E1': '\uE040',
  '\u00E0': '\uE041',
  '\u1EA3': '\uE042',
  '\u0203': '\uE043',
  '\u0101': '\uE044',
  '\u0105': '\uE045',
  '\u1E9A': '\uE046',
  '\u00E5': '\uE047',
  '\u01FB': '\uE048',
  '\u1E01': '\uE049',
  '\u00E3': '\uE04A',
  '\u0430': '\uE02C',
}

function measureText(text, { font, size, letterSpacing }) {
  let path = font.getPath(text, 0, 0, size, { letterSpacing })
  let bb = path.getBoundingBox()
  return bb.x2 - bb.x1
}

function applyInterCharVariants(text) {
  let newText = ''
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    newText += charVariants[char] ?? char
  }
  return newText
}

function resolve(filename) {
  return join(process.cwd(), 'assets', filename)
}

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let body = ''
        res.on('data', (chunk) => {
          body += chunk
        })
        res.on('end', () => {
          resolve({ body, statusCode: res.statusCode })
        })
      })
      .on('error', (error) => {
        reject(error)
      })
  })
}

function getLines(text, { font, size, maxWidth, letterSpacing = 0 }) {
  let words = text.split(' ')
  let lines = []
  let currentLine = words[0]

  for (let i = 1; i < words.length; i++) {
    let word = words[i]
    let width = measureText(currentLine + ' ' + word, { font, size, letterSpacing })
    if (width < maxWidth) {
      currentLine += ' ' + word
    } else {
      lines.push(currentLine)
      currentLine = word
    }
  }
  lines.push(currentLine)
  return lines
}

function truncate(text, { font, size, maxWidth, letterSpacing = 0 }) {
  let suffix = ' …'
  let width = Infinity
  while (true) {
    width = measureText(text + suffix, { font, size, letterSpacing })
    if (width < maxWidth) {
      return text + suffix
    }
    text = text.replace(/ \S*$/, '')
  }
}

function getText(text, { font, size, letterSpacing = 0, lineHeight = size, maxLines = Infinity }) {
  text = applyInterCharVariants(text)
  let scale = (1 / font.unitsPerEm) * size
  let height = font.ascender * scale + Math.abs(font.descender * scale)
  let dy = (lineHeight - height) / 2
  let maxWidth = WIDTH - PADDING * 2
  let lines = getLines(text, { font, size, maxWidth, letterSpacing })

  if (lines.length > maxLines) {
    lines = lines.slice(0, maxLines)
    lines[lines.length - 1] = truncate(lines[lines.length - 1], {
      font,
      size,
      maxWidth,
      letterSpacing,
    })
  }

  return {
    lines: lines.length,
    height: lineHeight * lines.length,
    draw: (ctx, x, y, { color = 'black' } = {}) => {
      for (let i = 0; i < lines.length; i++) {
        let path = font.getPath(
          lines[i],
          x,
          y + font.ascender * scale + dy + lineHeight * i,
          size,
          { letterSpacing }
        )
        path.fill = color
        path.draw(ctx)
      }
    },
  }
}

export default async function handler(req, res) {
  try {
    if (!req.query.path?.startsWith('/') || req.query.path?.startsWith('/api/')) {
      res.statusCode = 400
      return res.end('Error')
    }

    let path = req.query.path.replace(/\/+$/, '')
    if (path === '') path = '/'

    let override = imageOverrides.find(({ pattern }) =>
      typeof pattern === 'string' ? pattern === path : pattern.test(path)
    )

    if (override) {
      let imageBuffer = createReadStream(override.image)
      res.setHeader('Content-Type', override.type)
      imageBuffer.pipe(res)
      return
    }

    let url = `https://tailwindcss.com${path}`
    let { body, statusCode } = await get(url)

    if (statusCode === 404) {
      res.statusCode = 404
      return res.end('404')
    }
    if (statusCode !== 200 || !body) {
      res.statusCode = 500
      return res.end('Error')
    }

    let $ = cheerio.load(body)
    let title = $('title')
      .text()
      .replace(/ [-–] Tailwind CSS$/, '')

    if (!title) {
      res.statusCode = 500
      return res.end('Error')
    }

    let eyebrow = $('#header > div > p:first-of-type').text()
    let description = $('meta[property="og:description"]').attr('content')

    if (path.startsWith('/blog/')) {
      eyebrow = 'Blog'
    }

    let canvas = new Canvas(WIDTH, HEIGHT)
    let ctx = canvas.getContext('2d')

    let bgImage = new Image()
    bgImage.src = readFileSync(resolve('og-background.png'))
    bgImage.width = WIDTH
    bgImage.height = HEIGHT
    ctx.drawImage(bgImage, 0, 0, WIDTH, HEIGHT)

    let logoImage = new Image()
    logoImage.src = readFileSync(resolve('logo.svg'))
    logoImage.width = 404
    logoImage.height = 50
    ctx.drawImage(logoImage, PADDING, PADDING, 404, 50)

    let eyebrowText = eyebrow
      ? getText(eyebrow, { font: fontSemiBold, size: 36, lineHeight: 54 })
      : null
    let titleText = getText(title, {
      font: fontExtraBold,
      size: 72,
      lineHeight: 80,
      letterSpacing: -0.025,
      maxLines: 3,
    })
    let descriptionText =
      description && titleText.lines < 3
        ? getText(description, {
            font: fontSemiBold,
            size: 36,
            lineHeight: 54,
            maxLines: titleText.lines === 2 ? 2 : 3,
          })
        : null

    let offset = PADDING

    if (descriptionText) {
      descriptionText.draw(ctx, PADDING, HEIGHT - offset - descriptionText.height, {
        color: '#64748b',
      })
      offset += descriptionText.height + 12
    }

    titleText.draw(ctx, PADDING, HEIGHT - offset - titleText.height)

    if (eyebrowText) {
      eyebrowText.draw(ctx, PADDING, HEIGHT - offset - titleText.height - 12 - eyebrowText.height, {
        color: '#0ea5e9',
      })
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    res.setHeader('Cache-Control', 'public, no-transform, s-maxage=31536000, max-age=3600')
    res.end(canvas.toBuffer('image/png'))
  } catch (e) {
    res.statusCode = 500
    console.error(e)
    res.end('Error')
  }
}
