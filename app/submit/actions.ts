"use server"

export type SubmitCourtState = {
  status: "idle" | "success" | "error"
  message?: string
}

export async function submitCourtAction(
  _prev: SubmitCourtState,
  formData: FormData
): Promise<SubmitCourtState> {
  const name = formData.get("name")?.toString().trim()
  const address = formData.get("address")?.toString().trim()
  const city = formData.get("city")?.toString().trim()
  const region = formData.get("region")?.toString().trim()
  const type = formData.get("type")?.toString().trim()
  const totalCourts = formData.get("totalCourts")?.toString().trim()
  const website = formData.get("website")?.toString().trim()
  const phone = formData.get("phone")?.toString().trim()
  const description = formData.get("description")?.toString().trim()
  const submitterEmail = formData.get("submitterEmail")?.toString().trim()

  if (!name || !address || !city || !region || !type || !totalCourts || !description || !submitterEmail) {
    return { status: "error", message: "Please fill in all required fields." }
  }

  // Log submission (in production you'd save to a database or send an email)
  console.log("[v0] Court submission received:", {
    name, address, city, region, type, totalCourts, website, phone, description, submitterEmail,
  })

  // Simulate a short delay
  await new Promise((r) => setTimeout(r, 500))

  return {
    status: "success",
    message: `Thank you! "${name}" has been submitted for review. We'll be in touch at ${submitterEmail}.`,
  }
}
