import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const PROJECTS_DIR = path.join(process.cwd(), 'content/projects')

export type ProjectMeta = {
  slug: string
  title: string
  summary: string
  stack: string[]
  architecture: string
  featured: boolean
  order: number
  liveUrl?: string
  githubUrl?: string
  image?: string
  screenshots: string[]
}

export type Project = ProjectMeta & {
  content: string
}

function resolveCoverImage(slug: string, fromFrontmatter?: string) {
  if (fromFrontmatter) return fromFrontmatter

  for (const ext of ['png', 'jpg', 'jpeg', 'webp']) {
    const rel = `/images/projects/${slug}.${ext}`
    const abs = path.join(process.cwd(), 'public', rel.replace(/^\//, ''))
    if (fs.existsSync(abs)) return rel
  }
  return undefined
}

function parseFile(filename: string): Project {
  const slug = filename.replace(/\.mdx$/, '')
  const raw = fs.readFileSync(path.join(PROJECTS_DIR, filename), 'utf8')
  const { data, content } = matter(raw)

  const screenshots = Array.isArray(data.screenshots)
    ? data.screenshots.map(String)
    : []

  const image = resolveCoverImage(
    slug,
    data.image ? String(data.image) : undefined
  )

  return {
    slug,
    title: String(data.title),
    summary: String(data.summary),
    stack: Array.isArray(data.stack) ? data.stack.map(String) : [],
    architecture: String(data.architecture ?? ''),
    featured: Boolean(data.featured ?? true),
    order: Number(data.order ?? 99),
    liveUrl: data.liveUrl ? String(data.liveUrl) : undefined,
    githubUrl: data.githubUrl ? String(data.githubUrl) : undefined,
    image,
    screenshots,
    content,
  }
}

export function getAllProjects(): ProjectMeta[] {
  if (!fs.existsSync(PROJECTS_DIR)) return []

  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const { content: _c, ...meta } = parseFile(f)
      return meta
    })
    .sort((a, b) => a.order - b.order)
}

export function getFeaturedProjects(): ProjectMeta[] {
  return getAllProjects().filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | null {
  const file = path.join(PROJECTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  return parseFile(`${slug}.mdx`)
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map((p) => p.slug)
}
