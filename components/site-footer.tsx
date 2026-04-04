import Link from "next/link"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer id="about" className="bg-foreground text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
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
              <span className="font-bold text-white text-lg">
                Pickleball<span className="text-primary">QC</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm">
              Le répertoire non-officiel de tous les terrains de pickleball au Québec — intérieurs, extérieurs, parcs et centres privés.
            </p>
            <p className="mt-1 text-xs text-white/40">
              The unofficial directory of all pickleball courts in Quebec.
            </p>
            <Link
              href="/submit"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Submit a Court / Soumettre un terrain
            </Link>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "#directory", label: "Répertoire", sub: "Directory" },
                { href: "#regions", label: "Régions", sub: "Regions" },
                { href: "#about", label: "À propos", sub: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}{" "}
                    <span className="text-white/30 text-xs">/ {link.sub}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
              Ressources
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "https://pickleballenligne.com", label: "Pickleball en Ligne" },
                { href: "https://espacepickleball.com", label: "Espace Pickleball" },
                { href: "https://centrepickle.com", label: "Centre Pickle" },
                { href: "https://apvq.org", label: "APVQ" },
                { href: "https://514pickleball.com", label: "514 Pickleball" },
              ].map((r) => (
                <li key={r.href}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {r.label}
                    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-2.5 w-2.5 opacity-40" aria-hidden="true">
                      <path d="M1.5 8.5L8.5 1.5M5 1.5H8.5v3.5" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/30">
          <p>&copy; {year} PickleballQC. Répertoire non-officiel / Unofficial directory.</p>
          <p>
            Données approximatives — vérifiez auprès des centres.{" "}
            <span className="text-white/20">/ Approximate data — verify with each venue.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
