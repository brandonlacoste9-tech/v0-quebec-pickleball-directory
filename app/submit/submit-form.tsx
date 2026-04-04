"use client"

import { useActionState } from "react"
import { submitCourtAction, type SubmitCourtState } from "./actions"
import { regions } from "@/lib/courts"

const initialState: SubmitCourtState = { status: "idle" }

export function SubmitCourtForm() {
  const [state, formAction, isPending] = useActionState(submitCourtAction, initialState)

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/5 px-8 py-12 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-7 w-7 text-primary" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="mb-2 text-xl font-bold text-foreground">Submission received!</h2>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">{state.message}</p>
        <a
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Back to directory
        </a>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {state.status === "error" && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {state.message}
        </div>
      )}

      {/* Court name */}
      <div className="grid gap-1.5">
        <label htmlFor="name" className="text-sm font-semibold text-foreground">
          Court / Facility Name <span className="text-destructive">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="e.g. Centre Pickle Montreal"
          className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Address + City */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="address" className="text-sm font-semibold text-foreground">
            Address <span className="text-destructive">*</span>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            placeholder="123 Rue Principale"
            className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="city" className="text-sm font-semibold text-foreground">
            City / Ville <span className="text-destructive">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            placeholder="e.g. Montreal"
            className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Region + Type */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="region" className="text-sm font-semibold text-foreground">
            Region <span className="text-destructive">*</span>
          </label>
          <select
            id="region"
            name="region"
            required
            defaultValue=""
            className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="" disabled>Select a region…</option>
            {regions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
            <option value="Other">Other / Autre</option>
          </select>
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="type" className="text-sm font-semibold text-foreground">
            Court Type <span className="text-destructive">*</span>
          </label>
          <select
            id="type"
            name="type"
            required
            defaultValue=""
            className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="" disabled>Select type…</option>
            <option value="indoor">Indoor / Intérieur</option>
            <option value="outdoor">Outdoor / Extérieur</option>
            <option value="both">Both / Les deux</option>
          </select>
        </div>
      </div>

      {/* Total Courts */}
      <div className="grid gap-1.5 max-w-[200px]">
        <label htmlFor="totalCourts" className="text-sm font-semibold text-foreground">
          Number of Courts <span className="text-destructive">*</span>
        </label>
        <input
          id="totalCourts"
          name="totalCourts"
          type="number"
          min={1}
          required
          placeholder="e.g. 6"
          className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Website + Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="website" className="text-sm font-semibold text-foreground">
            Website
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://example.com"
            className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="phone" className="text-sm font-semibold text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="514-000-0000"
            className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Description */}
      <div className="grid gap-1.5">
        <label htmlFor="description" className="text-sm font-semibold text-foreground">
          Description <span className="text-destructive">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          placeholder="Tell us about the facility — amenities, hours, pricing, what makes it special…"
          className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none leading-relaxed"
        />
      </div>

      {/* Submitter email */}
      <div className="grid gap-1.5">
        <label htmlFor="submitterEmail" className="text-sm font-semibold text-foreground">
          Your Email <span className="text-destructive">*</span>
        </label>
        <input
          id="submitterEmail"
          name="submitterEmail"
          type="email"
          required
          placeholder="you@example.com"
          className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <p className="text-xs text-muted-foreground">We&apos;ll use this to follow up if we have questions.</p>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <circle cx="12" cy="12" r="10" strokeOpacity={0.25} />
              <path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
            Submitting…
          </>
        ) : (
          "Submit Court"
        )}
      </button>
    </form>
  )
}
