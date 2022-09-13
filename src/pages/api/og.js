import { createReadStream, readFileSync } from 'fs'
import { join } from 'path'
import cheerio from 'cheerio'
// import { createCanvas, registerFont, loadImage } from 'canvas'
import { https } from 'follow-redirects'
import { Canvas, GlobalFonts, Image } from '@napi-rs/canvas'

const imageOverrides = [
  { pattern: '/', image: join(__dirname, '_files', 'og-default.jpg'), type: 'image/jpeg' },
]

// registerFont(join(__dirname, '_files', 'Inter-SemiBold.otf'), { family: 'Inter', weight: '600' })
// registerFont(join(__dirname, '_files', 'Inter-ExtraBold.otf'), { family: 'Inter', weight: '800' })

function resolve(filename) {
  return join(process.cwd(), 'assets', filename)
}

GlobalFonts.registerFromPath(resolve('Inter-SemiBold.otf'), 'Inter')
GlobalFonts.registerFromPath(resolve('Inter-ExtraBold.otf'), 'Inter')

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

export default async function handler(req, res) {
  try {
    if (!req.query.path?.startsWith('/')) {
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

    let superTitle = $('#header > div > p:first-of-type').text()
    let description = $('meta[property="og:description"]').attr('content')

    if (path.startsWith('/blog/')) {
      superTitle = 'Blog'
      description = undefined
    }

    // let html = await getHtml({ title, superTitle, description })

    // const canvas = createCanvas(1280, 720)
    // const ctx = canvas.getContext('2d')

    // let bgImage = await loadImage(join(__dirname, '_files', 'og-background.png'))
    // ctx.drawImage(bgImage, 0, 0, 1280, 720)

    // ctx.font = '800 72px "Inter"'
    // ctx.fillText('Margin', 0, 0)

    const canvas = new Canvas(1280, 720)
    const ctx = canvas.getContext('2d')

    const NAPI_RS = readFileSync(resolve('og-background.png'))
    const NAPI_RS_IMAGE = new Image()
    NAPI_RS_IMAGE.src = NAPI_RS
    NAPI_RS_IMAGE.width = 1280
    NAPI_RS_IMAGE.height = 720
    ctx.drawImage(NAPI_RS_IMAGE, 0, 0, 1280, 720)

    ctx.textBaseline = 'top'
    ctx.font = '800 72px "Inter"'
    ctx.fillText('Margin', 0, 0)

    res.statusCode = 200
    res.setHeader('Content-Type', 'image/png')
    res.setHeader('Cache-Control', 'public, no-transform, s-maxage=31536000, max-age=3600')
    res.end(await canvas.encode('png'))
  } catch (e) {
    res.statusCode = 500
    console.error(e)
    res.end('Error')
  }
}
