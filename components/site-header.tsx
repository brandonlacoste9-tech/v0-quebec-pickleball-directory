"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang } = useLanguage()

  const nav = {
    courts:  { en: "Courts",          fr: "Terrains" },
    regions: { en: "Regions",         fr: "Régions" },
    about:   { en: "About",           fr: "À propos" },
    submit:  { en: "Submit a Court",  fr: "Soumettre un terrain" },
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-primary-foreground" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3v18M3 12h18" strokeOpacity="0.5" />
              <path d="M6 6l12 12M18 6L6 18" strokeOpacity="0.3" />
            </svg>
          </div>
          <span className="font-bold text-foreground text-lg tracking-tight leading-none">
            Pickleball<span className="text-primary">QC</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          <Link href="#directory" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {nav.courts[lang]}
          </Link>
          <Link href="#regions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {nav.regions[lang]}
          </Link>
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {nav.about[lang]}
          </Link>
        </nav>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center rounded-lg border border-border overflow-hidden text-xs font-bold" role="group" aria-label="Language">
            <button
              onClick={() => setLang("fr")}
              className={`px-3 py-1.5 transition-colors ${lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              aria-pressed={lang === "fr"}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
          <Link href="/submit" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
            {nav.submit[lang]}
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 h-8 w-8 rounded"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={`block h-0.5 w-5 bg-foreground transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-foreground transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-card px-4 py-4 flex flex-col gap-4" aria-label="Mobile navigation">
          <Link href="#directory" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground">
            {nav.courts[lang]}
          </Link>
          <Link href="#regions" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground">
            {nav.regions[lang]}
          </Link>
          <Link href="#about" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground">
            {nav.about[lang]}
          </Link>
          {/* Mobile language toggle */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Language:</span>
            <div className="flex items-center rounded-lg border border-border overflow-hidden text-xs font-bold" role="group" aria-label="Language">
              <button
                onClick={() => setLang("fr")}
                className={`px-3 py-1.5 transition-colors ${lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                aria-pressed={lang === "fr"}
              >
                FR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>
          </div>
          <Link
            href="/submit"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity text-center"
          >
            {nav.submit[lang]}
          </Link>
        </nav>
      )}
    </header>
  )
}
