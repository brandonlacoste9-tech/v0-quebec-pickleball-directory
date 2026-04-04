import { courts, regions, type Region } from "@/lib/courts"

const regionColors: Record<string, string> = {
  Montreal: "bg-blue-500",
  "Quebec City": "bg-primary",
  Laval: "bg-teal-500",
  Longueuil: "bg-cyan-500",
  Gatineau: "bg-emerald-500",
  Sherbrooke: "bg-lime-600",
  "Trois-Rivieres": "bg-green-700",
  "Mont-Tremblant": "bg-sky-500",
  "Rive-Sud": "bg-indigo-400",
  Laurentides: "bg-violet-500",
}

export function RegionsSection() {
  const regionStats = regions.map((r) => {
    const rc = courts.filter((c) => c.region === r)
    const total = rc.reduce((s, c) => s + c.totalCourts, 0)
    return {
      region: r,
      sites: rc.length,
      courts: total,
      hasIndoor: rc.some((c) => c.type === "indoor" || c.type === "both"),
      hasOutdoor: rc.some((c) => c.type === "outdoor" || c.type === "both"),
    }
  })

  return (
    <section id="regions" className="bg-secondary border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-foreground">
            Par région
            <span className="block text-lg font-normal text-muted-foreground mt-1">By Region</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {regionStats.map(({ region, sites, courts: courtCount, hasIndoor, hasOutdoor }) => (
            <a
              key={region}
              href="#directory"
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary/40 hover:shadow-sm transition-all"
              aria-label={`Filter by region: ${region}`}
            >
              {/* Color dot */}
              <div className={`h-1.5 w-8 rounded-full ${regionColors[region] ?? "bg-primary"}`} />

              <div>
                <h3 className="font-bold text-foreground leading-tight">{region}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {sites} site{sites !== 1 ? "s" : ""} · {courtCount} terrain{courtCount !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="flex gap-1.5 mt-auto">
                {hasIndoor && (
                  <span className="rounded-md bg-blue-50 border border-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
                    Int.
                  </span>
                )}
                {hasOutdoor && (
                  <span className="rounded-md bg-green-50 border border-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                    Ext.
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
