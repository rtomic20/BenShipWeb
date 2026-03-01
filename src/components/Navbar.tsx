import { useState, useEffect } from 'react'
import { useLang } from '../contexts/LangContext'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#o-nama', label: t.nav_about },
    { href: '#usluge', label: t.nav_services },
    { href: '#kontakt', label: t.nav_contact },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D1F3C] shadow-lg' : 'bg-[#0D1F3C]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <div className="bg-white rounded-lg px-2 py-1 shadow-sm">
              <img
                src="/benship-logo.jpg"
                alt="Ben Ship Supply"
                className="h-10 w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-[#C9A84C] transition-colors text-sm font-medium uppercase tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Lang toggle + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'hr' ? 'en' : 'hr')}
              className="flex items-center gap-1 px-3 py-1 rounded border border-[#C9A84C]/50 text-[#C9A84C] text-sm font-semibold hover:bg-[#C9A84C]/10 transition-colors"
              aria-label="Toggle language"
            >
              <span>{lang === 'hr' ? '🇭🇷' : '🇬🇧'}</span>
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Hamburger (mobile) */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 pb-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-white/80 hover:text-[#C9A84C] transition-colors text-sm font-medium uppercase tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
