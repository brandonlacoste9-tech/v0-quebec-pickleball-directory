import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SubmitCourtForm } from "./submit-form"

export const metadata = {
  title: "Submit a Court — PickleballQC",
  description: "Know a pickleball court in Quebec that is not listed? Submit it and we will add it to the directory.",
}

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Page header */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
          <a
            href="/"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-3.5 w-3.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 3L5 8l5 5" />
            </svg>
            Back to directory
          </a>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6 text-primary" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground text-balance">
                Submit a Court
              </h1>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                Know a pickleball court in Quebec that is not listed?{" "}
                Fill in the details below and we will review it and add it to the directory.
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Vous connaissez un terrain non répertorié? Soumettez-le ici.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <SubmitCourtForm />
        </div>

        {/* Info note */}
        <p className="mt-4 text-center text-xs text-muted-foreground">
          All submissions are reviewed before being published. Fields marked{" "}
          <span className="text-destructive font-medium">*</span> are required.
        </p>
      </section>

      <SiteFooter />
    </main>
  )
}
