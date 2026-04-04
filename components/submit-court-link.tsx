"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function SubmitCourtLink() {
  const pathname = usePathname()
  const isActive = pathname === "/submit"

  return (
    <Link
      href="/submit"
      className={`rounded-lg px-4 py-2 text-sm font-semibold transition-opacity ${
        isActive
          ? "bg-primary/10 text-primary pointer-events-none"
          : "bg-primary text-primary-foreground hover:opacity-90"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      Submit a Court
    </Link>
  )
}
