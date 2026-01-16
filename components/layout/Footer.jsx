import Link from 'next/link'
import { siteConfig } from '@/content/site'
import { socialLinks } from '@/content/social'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy border-t border-slate/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dense opacity-30"></div>
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-accent mb-3 sm:mb-4 font-mono break-words">
              {siteConfig.name}
            </h3>
            <p className="text-slate text-xs sm:text-sm leading-relaxed">
              {siteConfig.role}
              <br />
              {siteConfig.location}
            </p>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-slate-lighter mb-3 sm:mb-4 font-mono">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-slate hover:text-accent transition-colors text-xs sm:text-sm font-mono relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#projects"
                className="text-slate hover:text-accent transition-colors text-xs sm:text-sm font-mono relative group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#about"
                className="text-slate hover:text-accent transition-colors text-xs sm:text-sm font-mono relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="#contact"
                className="text-slate hover:text-accent transition-colors text-xs sm:text-sm font-mono relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-lighter mb-3 sm:mb-4 font-mono">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-accent transition-colors text-xs sm:text-sm font-mono break-all relative group inline-block"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-slate/20 text-center text-xs sm:text-sm text-slate/50 font-mono">
          <p>
            © {currentYear} {siteConfig.name}. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
      </div>
    </footer>
  )
}
