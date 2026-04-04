import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { RegionsSection } from "@/components/regions-section"
import { CourtDirectory } from "@/components/court-directory"
import { SiteFooter } from "@/components/site-footer"
import { courts } from "@/lib/courts"

const BASE_URL = 'https://pickleballqc.ca'

// JSON-LD structured data for Google rich results and AI search engines
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // Website entity
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'PickleballQC',
      description: 'Le répertoire complet des terrains de pickleball au Québec — intérieurs, extérieurs, parcs et centres privés.',
      inLanguage: ['fr-CA', 'en-CA'],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE_URL}/#directory?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    // ItemList of all courts
    {
      '@type': 'ItemList',
      '@id': `${BASE_URL}/#court-list`,
      name: 'Terrains de pickleball au Québec',
      description: 'Complete list of pickleball courts in Quebec, Canada.',
      numberOfItems: courts.length,
      itemListElement: courts.map((court, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SportsActivityLocation',
          '@id': `${BASE_URL}/#court-${court.id}`,
          name: court.name,
          description: court.description,
          address: {
            '@type': 'PostalAddress',
            addressLocality: court.city,
            addressRegion: 'QC',
            addressCountry: 'CA',
            streetAddress: court.address,
          },
          geo: {
            '@type': 'GeoCoordinates',
            addressCountry: 'CA',
          },
          url: court.website ?? BASE_URL,
          telephone: court.phone,
          sport: 'Pickleball',
          amenityFeature: court.amenities.map((a) => ({
            '@type': 'LocationFeatureSpecification',
            name: a,
            value: true,
          })),
          ...(court.price && {
            priceRange: court.price,
          }),
          ...(court.hours && {
            openingHours: court.hours,
          }),
        },
      })),
    },
    // Organization
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'PickleballQC',
      url: BASE_URL,
      description: 'Répertoire non-officiel des terrains de pickleball au Québec.',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Quebec, Canada',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <SiteHeader />
        <Hero />
        <RegionsSection />
        <CourtDirectory />
        <SiteFooter />
      </main>
    </>
  )
}
