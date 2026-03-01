import { useLang } from '../contexts/LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="bg-[#0D1F3C] text-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#">
            <img
              src="/benship-logo.jpg"
              alt="Ben Ship Supply"
              className="h-16 w-auto object-contain rounded"
            />
          </a>

          {/* Nav anchors */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="#o-nama" className="hover:text-[#C9A84C] transition-colors">{t.nav_about}</a>
            <a href="#usluge" className="hover:text-[#C9A84C] transition-colors">{t.nav_services}</a>
            <a href="#kontakt" className="hover:text-[#C9A84C] transition-colors">{t.nav_contact}</a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-center sm:text-right">
            {t.footer_copy}
          </p>
        </div>
      </div>
    </footer>
  )
}
