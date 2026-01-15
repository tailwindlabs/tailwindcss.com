import { NextResponse } from 'next/server'
import fs from 'node:fs'
import path from 'node:path'
import { mdxToMarkdown } from '@/mdx-to-markdown'

const docsDir = path.join(process.cwd(), 'src/docs')

function getMdxPath(slug: string): string {
  return path.join(docsDir, `${slug}.mdx`)
}

function mdxExists(slug: string): boolean {
  return fs.existsSync(getMdxPath(slug))
}

export async function generateStaticParams() {
  const files = fs.readdirSync(docsDir)
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: path.parse(file).name,
    }))
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  if (!mdxExists(slug)) {
    return new NextResponse('Not found', { status: 404 })
  }

  const mdxContent = fs.readFileSync(getMdxPath(slug), 'utf-8')
  const markdown = await mdxToMarkdown(mdxContent)

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  })
}
