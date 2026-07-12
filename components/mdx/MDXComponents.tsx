import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="mb-3 mt-10 font-display text-title text-atelier-cream" {...props} />
  ),
  h3: (props) => (
    <h3 className="mb-2 mt-8 text-lg font-semibold text-atelier-cream" {...props} />
  ),
  p: (props) => <p className="mb-4 text-body text-atelier-sand" {...props} />,
  ul: (props) => (
    <ul className="mb-4 list-disc space-y-2 pl-5 text-atelier-sand" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-4 list-decimal space-y-2 pl-5 text-atelier-sand" {...props} />
  ),
  li: (props) => <li className="text-small leading-relaxed" {...props} />,
  a: (props) => (
    <a className="text-atelier-coral underline-offset-2 hover:underline" {...props} />
  ),
  strong: (props) => (
    <strong className="font-semibold text-atelier-cream" {...props} />
  ),
  code: (props) => (
    <code
      className="rounded-sm bg-atelier-raised px-1.5 py-0.5 font-mono text-small text-atelier-cream"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mb-4 overflow-x-auto rounded-soft border border-atelier-line bg-atelier-raised p-4 font-mono text-small"
      {...props}
    />
  ),
}
