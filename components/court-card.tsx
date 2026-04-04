import type { Court } from "@/lib/courts"

const typeLabels: Record<Court["type"], { label: string; labelFr: string; color: string }> = {
  indoor: { label: "Indoor", labelFr: "Intérieur", color: "bg-blue-100 text-blue-800" },
  outdoor: { label: "Outdoor", labelFr: "Extérieur", color: "bg-green-100 text-green-800" },
  both: { label: "Indoor + Outdoor", labelFr: "Int. + Ext.", color: "bg-teal-100 text-teal-800" },
}

interface CourtCardProps {
  court: Court
  featured?: boolean
}

export function CourtCard({ court, featured = false }: CourtCardProps) {
  const typeInfo = typeLabels[court.type]

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border bg-card overflow-hidden transition-shadow hover:shadow-md ${
        featured ? "border-primary/40 ring-1 ring-primary/20" : "border-border"
      }`}
    >
      {/* Top color bar */}
      <div
        className={`h-1.5 w-full ${
          court.type === "indoor"
            ? "bg-blue-500"
            : court.type === "outdoor"
              ? "bg-primary"
              : "bg-teal-500"
        }`}
      />

      <div className="flex flex-1 flex-col p-5">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            {featured && (
              <span className="mb-1.5 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                En vedette
              </span>
            )}
            <h3 className="font-bold text-foreground leading-snug text-balance">{court.name}</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {court.city}, {court.region}
            </p>
          </div>
          <span
            className={`shrink-0 mt-0.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${typeInfo.color}`}
          >
            {typeInfo.labelFr}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
          {court.description}
        </p>

        {/* Court count chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {court.indoorCourts !== undefined && court.indoorCourts > 0 && (
            <span className="flex items-center gap-1 rounded-lg bg-blue-50 border border-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3" aria-hidden="true">
                <path d="M2 2h12v12H2z" fillOpacity="0.2" />
                <path d="M2 2v12h12V2H2zm1 1h10v10H3V3z" />
              </svg>
              {court.indoorCourts} intérieur{court.indoorCourts > 1 ? "s" : ""}
            </span>
          )}
          {court.outdoorCourts !== undefined && court.outdoorCourts > 0 && (
            <span className="flex items-center gap-1 rounded-lg bg-green-50 border border-green-100 px-2 py-1 text-xs font-semibold text-green-700">
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3" aria-hidden="true">
                <circle cx="8" cy="5" r="3" />
                <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" fillOpacity="0.3" />
              </svg>
              {court.outdoorCourts} extérieur{court.outdoorCourts > 1 ? "s" : ""}
            </span>
          )}
          {court.totalCourts > 0 && !court.indoorCourts && !court.outdoorCourts && (
            <span className="flex items-center gap-1 rounded-lg bg-secondary border border-border px-2 py-1 text-xs font-semibold text-foreground">
              {court.totalCourts} terrain{court.totalCourts > 1 ? "s" : ""}
            </span>
          )}
        </div>

        {/* Amenities */}
        {court.amenities.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {court.amenities.slice(0, 4).map((a) => (
              <span
                key={a}
                className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground"
              >
                {a}
              </span>
            ))}
            {court.amenities.length > 4 && (
              <span className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
                +{court.amenities.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Footer row */}
        <div className="flex items-center justify-between gap-3 mt-auto pt-3 border-t border-border">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {court.price && (
              <span className="flex items-center gap-1">
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3" aria-hidden="true">
                  <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm.75 4.5v1h.5a.75.75 0 010 1.5H8.75v3a.75.75 0 01-1.5 0v-3H6.75a.75.75 0 010-1.5h.5v-1a.75.75 0 011.5 0z" />
                </svg>
                {court.price}
              </span>
            )}
            {court.hours && (
              <span className="flex items-center gap-1">
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M8 1a7 7 0 100 14A7 7 0 008 1zm.75 3.75a.75.75 0 00-1.5 0V8c0 .199.079.39.22.53l2.25 2.25a.75.75 0 101.06-1.06L8.75 7.69V4.75z"
                    clipRule="evenodd"
                  />
                </svg>
                {court.hours}
              </span>
            )}
          </div>
          {court.website && (
            <a
              href={court.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              aria-label={`Visit website for ${court.name}`}
            >
              Site web
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-3 w-3" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M5.5 2.5H9.5v4" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
