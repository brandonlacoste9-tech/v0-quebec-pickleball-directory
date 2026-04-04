"use client"

import { useState, useMemo } from "react"
import { courts, regions, type Court, type Region } from "@/lib/courts"
import { CourtCard } from "./court-card"

const ALL = "All"

type TypeFilter = "All" | "indoor" | "outdoor" | "both"

export function CourtDirectory() {
  const [search, setSearch] = useState("")
  const [regionFilter, setRegionFilter] = useState<Region | typeof ALL>(ALL)
  const [typeFilter, setTypeFilter] = useState<TypeFilter>(ALL)

  const filtered = useMemo(() => {
    return courts.filter((c) => {
      const matchesSearch =
        !search ||
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.city.toLowerCase().includes(search.toLowerCase()) ||
        c.region.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase())

      const matchesRegion = regionFilter === ALL || c.region === regionFilter

      const matchesType =
        typeFilter === ALL ||
        c.type === typeFilter ||
        (typeFilter === "indoor" && c.type === "both") ||
        (typeFilter === "outdoor" && c.type === "both")

      return matchesSearch && matchesRegion && matchesType
    })
  }, [search, regionFilter, typeFilter])

  const featured = filtered.filter((c) => c.featured)
  const rest = filtered.filter((c) => !c.featured)

  return (
    <section id="directory" className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      {/* Section heading */}
      <div className="mb-10 flex flex-col gap-2">
        <h2 className="text-3xl font-extrabold text-foreground">
          Répertoire des terrains
          <span className="block text-lg font-normal text-muted-foreground mt-1">
            Court Directory — {courts.length} sites across Quebec
          </span>
        </h2>
      </div>

      {/* Filters bar */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end">
        {/* Search */}
        <div className="relative flex-1 min-w-0">
          <label htmlFor="court-search" className="sr-only">
            Search courts
          </label>
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
          <input
            id="court-search"
            type="search"
            placeholder="Chercher par nom, ville… / Search by name, city…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Region filter */}
        <div className="flex flex-col gap-1 min-w-[180px]">
          <label htmlFor="region-filter" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Région
          </label>
          <select
            id="region-filter"
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value as Region | typeof ALL)}
            className="rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value={ALL}>Toutes les régions</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Type filter */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Type</span>
          <div className="flex gap-2" role="group" aria-label="Filter by court type">
            {(["All", "indoor", "outdoor", "both"] as TypeFilter[]).map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                  typeFilter === t
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {t === "All" ? "Tous" : t === "indoor" ? "Intérieur" : t === "outdoor" ? "Extérieur" : "Les deux"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="mb-6 text-sm text-muted-foreground">
        {filtered.length} terrain{filtered.length !== 1 ? "s" : ""} trouvé{filtered.length !== 1 ? "s" : ""}
        {regionFilter !== ALL ? ` dans ${regionFilter}` : ""}
      </p>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-card py-20 text-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-10 w-10 text-muted-foreground"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <p className="font-semibold text-foreground">Aucun terrain trouvé</p>
          <p className="text-sm text-muted-foreground">No courts found matching your search.</p>
          <button
            onClick={() => {
              setSearch("")
              setRegionFilter(ALL)
              setTypeFilter(ALL)
            }}
            className="mt-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Réinitialiser les filtres / Reset Filters
          </button>
        </div>
      ) : (
        <>
          {/* Featured courts */}
          {featured.length > 0 && (
            <div className="mb-10">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
                Terrains en vedette / Featured Courts
              </h3>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((c) => (
                  <CourtCard key={c.id} court={c} featured />
                ))}
              </div>
            </div>
          )}

          {/* All courts */}
          {rest.length > 0 && (
            <div>
              {featured.length > 0 && (
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Tous les terrains / All Courts
                </h3>
              )}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((c) => (
                  <CourtCard key={c.id} court={c} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  )
}
