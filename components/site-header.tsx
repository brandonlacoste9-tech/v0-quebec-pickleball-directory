"use client"

import { useState } from "react"
import Link from "next/link"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-primary-foreground"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3v18M3 12h18" strokeOpacity="0.5" />
              <path d="M6 6l12 12M18 6L6 18" strokeOpacity="0.3" />
            </svg>
          </div>
          <span className="font-bold text-foreground text-lg tracking-tight leading-none">
            Pickleball<span className="text-primary">QC</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          <Link
            href="#directory"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Terrains / Courts
          </Link>
          <Link
            href="#regions"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Régions / Regions
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            À propos / About
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/submit"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Submit a Court
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 h-8 w-8 rounded"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <nav
          className="md:hidden border-t border-border bg-card px-4 py-4 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          <Link
            href="#directory"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Terrains / Courts
          </Link>
          <Link
            href="#regions"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Régions / Regions
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            À propos / About
          </Link>
          <Link
            href="/submit"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity text-center"
          >
            Submit a Court
          </Link>
        </nav>
      )}
    </header>
  )
}
