export type CourtType = "indoor" | "outdoor" | "both"
export type Region =
  | "Montreal"
  | "Quebec City"
  | "Laval"
  | "Longueuil"
  | "Gatineau"
  | "Sherbrooke"
  | "Trois-Rivieres"
  | "Mont-Tremblant"
  | "Rive-Sud"
  | "Laurentides"

export interface Court {
  id: string
  name: string
  nameFr?: string
  region: Region
  city: string
  address: string
  type: CourtType
  indoorCourts?: number
  outdoorCourts?: number
  totalCourts: number
  surface?: string
  amenities: string[]
  website?: string
  phone?: string
  description: string
  descriptionFr?: string
  price?: string
  hours?: string
  featured?: boolean
}

export const courts: Court[] = [
  // ── MONTREAL ────────────────────────────────────────────────────────────────
  {
    id: "centre-pickle",
    name: "Centre Pickle",
    region: "Montreal",
    city: "Montreal",
    address: "Montreal, QC",
    type: "indoor",
    indoorCourts: 14,
    totalCourts: 14,
    surface: "US Open quality hardcourt",
    amenities: ["Restaurant", "Café Bar", "Coaching", "Leagues", "Open Play"],
    website: "https://centrepickle.com",
    description:
      "Montreal's premier indoor pickleball facility with 14 US Open-quality courts. Open year-round with extended hours, a vibrant community, and a full café-bar.",
    descriptionFr:
      "La principale installation de pickleball intérieur à Montréal avec 14 terrains de qualité US Open. Ouvert toute l'année avec des horaires étendus.",
    price: "Varies",
    featured: true,
  },
  {
    id: "514-pickleball",
    name: "514 Pickleball",
    region: "Montreal",
    city: "Dorval",
    address: "Dorval, QC",
    type: "indoor",
    indoorCourts: 8,
    totalCourts: 8,
    amenities: ["Pro Shop", "Coaching", "Leagues", "Open Play"],
    website: "https://514pickleball.com/en",
    description:
      "A growing indoor pickleball centre in the West Island area of Montreal, offering leagues, coaching and open play.",
    descriptionFr:
      "Un centre de pickleball intérieur en pleine croissance dans la région Ouest-de-l'île de Montréal.",
    price: "Varies",
  },
  {
    id: "parc-leroux",
    name: "Parc Leroux — Pickleball Courts",
    nameFr: "Parc Leroux — Terrains de pickleball",
    region: "Montreal",
    city: "Montreal",
    address: "Parc Leroux, Montreal, QC",
    type: "outdoor",
    outdoorCourts: 4,
    totalCourts: 4,
    surface: "Acrylic hardcourt",
    amenities: ["Free Access", "Lit Courts", "Benches"],
    website: "https://montreal.ca/en/places/parc-leroux-pickleball-courts",
    description:
      "Free outdoor pickleball courts managed by the City of Montreal in Parc Leroux. Open during park hours.",
    descriptionFr:
      "Terrains de pickleball extérieurs gratuits gérés par la Ville de Montréal au Parc Leroux.",
    price: "Free",
    hours: "Park hours",
  },
  {
    id: "parc-lefebvre",
    name: "Parc Lefebvre — Pickleball Courts",
    nameFr: "Parc Lefebvre — Terrains de pickleball",
    region: "Montreal",
    city: "Montreal",
    address: "Parc Lefebvre, Montreal, QC",
    type: "outdoor",
    outdoorCourts: 2,
    totalCourts: 2,
    surface: "Acrylic hardcourt",
    amenities: ["Free Access", "Benches"],
    website: "https://montreal.ca/en/places/parc-lefebvre-pickleball-courts",
    description:
      "City of Montreal outdoor pickleball courts located at Parc Lefebvre, free and open to the public.",
    descriptionFr:
      "Terrains de pickleball extérieurs de la Ville de Montréal au Parc Lefebvre, gratuits et ouverts au public.",
    price: "Free",
    hours: "Park hours",
  },
  // ── QUEBEC CITY ─────────────────────────────────────────────────────────────
  {
    id: "espace-pickleball",
    name: "Espace Pickleball",
    region: "Quebec City",
    city: "Quebec City",
    address: "Quebec City, QC",
    type: "both",
    indoorCourts: 13,
    outdoorCourts: 4,
    totalCourts: 17,
    surface: "PickleMaster acrylic-coated asphalt (indoor); Outdoor hardcourt",
    amenities: [
      "Sports Bar",
      "Pro Shop",
      "Gym",
      "Leagues",
      "Tournaments",
      "Coaching",
      "Private Rooms",
    ],
    website: "https://www.espacepickleball.com",
    description:
      "The largest pickleball centre in Quebec with 17 professional-quality courts — 13 indoor (including 3 championship-sized) and 4 outdoor. Also features a sports bar with outdoor terrace, pro shop, gym, and private rooms.",
    descriptionFr:
      "Le plus grand centre de pickleball au Québec avec 17 terrains de qualité professionnelle — 13 intérieurs (dont 3 de dimension championnat) et 4 extérieurs.",
    price: "Varies",
    featured: true,
  },
  {
    id: "apvq",
    name: "Association de Pickleball de Québec (APVQ)",
    nameFr: "Association de Pickleball de Québec (APVQ)",
    region: "Quebec City",
    city: "Quebec City",
    address: "Various locations, Quebec City, QC",
    type: "both",
    totalCourts: 10,
    amenities: ["Supervised Play", "Training Programs", "Leagues", "Tournaments"],
    website: "https://apvq.org",
    description:
      "The APVQ oversees access to indoor and outdoor courts throughout Quebec City, offering supervised play sessions, training programs, and tournaments.",
    descriptionFr:
      "L'APVQ supervise l'accès aux terrains intérieurs et extérieurs à travers Québec, offrant des séances de jeu supervisées, des programmes de formation et des tournois.",
    price: "Membership required",
  },
  // ── LAVAL ───────────────────────────────────────────────────────────────────
  {
    id: "tennis-13-laval",
    name: "Tennis 13 Fitness",
    region: "Laval",
    city: "Laval",
    address: "Laval, QC",
    type: "indoor",
    indoorCourts: 6,
    totalCourts: 6,
    amenities: ["Fitness Centre", "Coaching", "Leagues", "Open Play"],
    description:
      "A multi-sport fitness centre in Laval that has converted courts to offer indoor pickleball alongside tennis and fitness amenities.",
    descriptionFr:
      "Un centre sportif multifonctionnel à Laval qui a converti des terrains pour offrir du pickleball intérieur.",
    price: "Varies",
  },
  {
    id: "bois-de-boulogne-laval",
    name: "Bois-de-Boulogne Pickleball Courts",
    nameFr: "Terrains de pickleball Bois-de-Boulogne",
    region: "Laval",
    city: "Laval",
    address: "Bois-de-Boulogne, Laval, QC",
    type: "outdoor",
    outdoorCourts: 4,
    totalCourts: 4,
    surface: "Hardcourt",
    amenities: ["Free Access", "Benches", "Parking"],
    description:
      "Outdoor pickleball courts in the Bois-de-Boulogne area of Laval. Free public access during daylight hours.",
    descriptionFr:
      "Terrains de pickleball extérieurs dans le secteur Bois-de-Boulogne de Laval. Accès public gratuit.",
    price: "Free",
    hours: "Daylight hours",
  },
  // ── LONGUEUIL / RIVE-SUD ────────────────────────────────────────────────────
  {
    id: "parc-pierre-laporte",
    name: "Parc Pierre-Laporte",
    nameFr: "Parc Pierre-Laporte",
    region: "Longueuil",
    city: "Longueuil",
    address: "Parc Pierre-Laporte, Longueuil, QC",
    type: "outdoor",
    outdoorCourts: 3,
    totalCourts: 3,
    surface: "Hardcourt",
    amenities: ["Free Access", "Benches", "Parking"],
    description:
      "Outdoor pickleball courts at Parc Pierre-Laporte in Longueuil, operated by the city. Free and open to all residents.",
    descriptionFr:
      "Terrains de pickleball extérieurs au Parc Pierre-Laporte à Longueuil, exploités par la ville.",
    price: "Free",
    hours: "Park hours",
  },
  {
    id: "brossard-sportplex",
    name: "Complexe sportif de Brossard",
    region: "Rive-Sud",
    city: "Brossard",
    address: "Brossard, QC",
    type: "indoor",
    indoorCourts: 4,
    totalCourts: 4,
    amenities: ["Leagues", "Open Play", "Locker Rooms"],
    description:
      "Indoor pickleball courts at the Brossard sports complex, offering leagues and open play sessions.",
    descriptionFr:
      "Terrains de pickleball intérieurs au complexe sportif de Brossard, offrant des ligues et des séances de jeu libre.",
    price: "Varies",
  },
  // ── GATINEAU ────────────────────────────────────────────────────────────────
  {
    id: "club-pickleball-outaouais",
    name: "Club de Pickleball Outaouais",
    region: "Gatineau",
    city: "Gatineau",
    address: "Gatineau, QC",
    type: "both",
    indoorCourts: 4,
    outdoorCourts: 2,
    totalCourts: 6,
    amenities: ["Leagues", "Tournaments", "Coaching", "Social Play"],
    website: "https://pickleballenligne.com",
    description:
      "The main pickleball club serving the Outaouais region, with both indoor and outdoor courts and an active league schedule.",
    descriptionFr:
      "Le principal club de pickleball de la région Outaouais, avec des terrains intérieurs et extérieurs et un calendrier de ligues actif.",
    price: "Membership / Drop-in",
  },
  // ── SHERBROOKE ──────────────────────────────────────────────────────────────
  {
    id: "pickleball-estrie",
    name: "Pickleball Estrie",
    region: "Sherbrooke",
    city: "Sherbrooke",
    address: "Sherbrooke, QC",
    type: "both",
    indoorCourts: 4,
    outdoorCourts: 4,
    totalCourts: 8,
    amenities: ["Leagues", "Open Play", "Coaching"],
    description:
      "A well-established club serving the Eastern Townships with indoor and outdoor facilities, leagues and coaching.",
    descriptionFr:
      "Un club bien établi desservant les Cantons-de-l'Est avec des installations intérieures et extérieures.",
    price: "Varies",
  },
  // ── TROIS-RIVIERES ──────────────────────────────────────────────────────────
  {
    id: "pickleball-mauricie",
    name: "Pickleball Mauricie",
    region: "Trois-Rivieres",
    city: "Trois-Rivières",
    address: "Trois-Rivières, QC",
    type: "both",
    indoorCourts: 3,
    outdoorCourts: 3,
    totalCourts: 6,
    amenities: ["Leagues", "Social Play", "Coaching"],
    description:
      "Pickleball courts in the Mauricie region, combining indoor gym courts for winter and outdoor courts for summer play.",
    descriptionFr:
      "Terrains de pickleball en Mauricie, combinant des terrains intérieurs pour l'hiver et extérieurs pour l'été.",
    price: "Varies",
  },
  // ── MONT-TREMBLANT / LAURENTIDES ─────────────────────────────────────────────
  {
    id: "mont-tremblant-complex",
    name: "Mont-Tremblant Pickleball & Tennis Complex",
    nameFr: "Complexe Pickleball & Tennis de Mont-Tremblant",
    region: "Mont-Tremblant",
    city: "Mont-Tremblant",
    address: "Mont-Tremblant, QC",
    type: "both",
    indoorCourts: 10,
    outdoorCourts: 4,
    totalCourts: 18,
    surface: "Professional hardcourt",
    amenities: [
      "Tennis Courts",
      "Tournaments",
      "Pro Shop",
      "Coaching",
      "Spectator Seating",
    ],
    description:
      "A major new pickleball and tennis complex opening November 2026 in Mont-Tremblant. Features 10 professional indoor pickleball courts, 4 outdoor pickleball courts, and 4 indoor tennis courts.",
    descriptionFr:
      "Un nouveau grand complexe de pickleball et de tennis ouvrant en novembre 2026 à Mont-Tremblant. 10 terrains intérieurs, 4 extérieurs et 4 terrains de tennis.",
    price: "TBD",
    hours: "Opening Nov 2026",
    featured: true,
  },
  {
    id: "laurentides-pickleball",
    name: "Club Pickleball Laurentides",
    region: "Laurentides",
    city: "Saint-Jérôme",
    address: "Saint-Jérôme, QC",
    type: "both",
    indoorCourts: 3,
    outdoorCourts: 4,
    totalCourts: 7,
    amenities: ["Leagues", "Open Play", "Social Events"],
    description:
      "A community-run club in Saint-Jérôme serving the Laurentides region, with both indoor winter courts and outdoor summer courts.",
    descriptionFr:
      "Un club communautaire à Saint-Jérôme desservant la région des Laurentides, avec des terrains intérieurs l'hiver et extérieurs l'été.",
    price: "Membership / Drop-in",
  },
]

export const regions: Region[] = [
  "Montreal",
  "Quebec City",
  "Laval",
  "Longueuil",
  "Gatineau",
  "Sherbrooke",
  "Trois-Rivieres",
  "Mont-Tremblant",
  "Rive-Sud",
  "Laurentides",
]
