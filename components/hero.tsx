import Image from "next/image"
import { courts } from "@/lib/courts"

const totalCourts = courts.reduce((s, c) => s + c.totalCourts, 0)
const indoorCount = courts.filter((c) => c.type === "indoor" || c.type === "both").length
const outdoorCount = courts.filter((c) => c.type === "outdoor" || c.type === "both").length

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-foreground" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-courts.jpg"
          alt="Pickleball courts in Quebec"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Répertoire · Directory
            </span>
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Trouve ton terrain de{" "}
            <span className="text-primary">Pickleball</span> au Québec
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-white/70 text-pretty">
            Le répertoire complet des terrains de pickleball au Québec — intérieurs, extérieurs, parcs et centres privés.
            <br />
            <span className="text-white/50 text-base">
              The complete guide to pickleball courts across Quebec — indoor, outdoor, parks &amp; private clubs.
            </span>
          </p>

          {/* Search hint */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#directory"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
              Chercher un terrain / Find a Court
            </a>
            <a
              href="#regions"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors backdrop-blur"
            >
              Explorer les régions / Browse Regions
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-extrabold text-white">{courts.length}</p>
              <p className="mt-0.5 text-xs text-white/50 uppercase tracking-wide">Sites</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">{totalCourts}+</p>
              <p className="mt-0.5 text-xs text-white/50 uppercase tracking-wide">Terrains / Courts</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">10</p>
              <p className="mt-0.5 text-xs text-white/50 uppercase tracking-wide">Régions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
