import Link from "next/link"

export function SubmitCourtLink() {
  return (
    <Link
      href="/submit"
      className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
    >
      Submit a Court
    </Link>
  )
}
