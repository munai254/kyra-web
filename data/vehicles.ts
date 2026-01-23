// data/vehicles.ts

// ==========================
// Vehicle type definition
// ==========================

export type Vehicle = {
  // -------- Core fields (used in listings/cards) --------
  id: string;        // Used in URLs: /vehicles/[id]
  name: string;      // Display name
  brand: string;
  fuel: string;
  year: number;
  image: string;     // Main thumbnail image

  // -------- Detailed fields (used ONLY on View Details page) --------
  description?: string;     // Long description
  engine?: string;          // Engine specs
  transmission?: string;   // Auto / Manual
  drivetrain?: string;     // AWD / RWD / FWD
  mileage?: string;        // e.g. "45,000 km"

  features?: string[];     // Bullet list of features
  gallery?: string[];      // Multiple images for carousel/gallery
};

// ==========================
// Vehicles data
// ==========================

export const vehicles: Vehicle[] = [
  {
    id: "toyota-land-cruiser-200-series",
    name: "Toyota Land Cruiser 200 Series",
    brand: "Toyota",
    fuel: "Diesel",
    year: 2017,
    image: "/vehicles/toyota-land-cruiser-sahara.jpg",

    // ----- View Details content -----
    description:
      "A legendary full-size SUV built for luxury, durability, and extreme off-road performance.",
    engine: "4.5L V8 Twin-Turbo Diesel",
    transmission: "Automatic",
    drivetrain: "4WD",
    mileage: "82,000 km",

    features: [
      "Leather Interior",
      "Sunroof",
      "Multi-Terrain Select",
      "Cruise Control",
      "Reverse Camera",
    ],

    gallery: [
      "/vehicles/toyota-land-cruiser-sahara.jpg",
      "/vehicles/toyota-land-cruiser-interior.jpg",
      "/vehicles/toyota-land-cruiser-rear.jpg",
    ],
  },

  {
    id: "audi-a5-s-line",
    name: "Audi A5 S Line",
    brand: "Audi",
    fuel: "Petrol",
    year: 2019,
    image: "/vehicles/audi-a5-s-line.jpg",

    description:
      "A sleek and sporty coupe offering premium comfort with aggressive S Line styling.",
    engine: "2.0L Turbocharged",
    transmission: "Automatic",
    drivetrain: "AWD",

    features: [
      "Digital Cockpit",
      "S Line Package",
      "LED Headlights",
      "Sport Seats",
    ],

    gallery: [
      "/vehicles/audi-a5-s-line.jpg",
      "/vehicles/audi-a5-interior.jpg",
    ],
  },

  {
    id: "bmw-b5",
    name: "BMW M5",
    brand: "BMW",
    fuel: "Diesel",
    year: 2020,
    image: "/vehicles/bmw-m5.jpg",

    description:
      "A high-performance luxury sedan combining raw power with executive comfort.",
    engine: "4.4L V8 Twin-Turbo",
    transmission: "Automatic",
    drivetrain: "AWD",

    features: [
      "M Sport Exhaust",
      "Adaptive Suspension",
      "Heads-Up Display",
    ],

    gallery: [
      "/vehicles/bmw-m5.jpg",
      "/vehicles/bmw-m5-interior.jpg",
    ],
  },

  {
    id: "mercedes-benz-glc",
    name: "Mercedes-Benz GLC",
    brand: "Mercedes",
    fuel: "Diesel",
    year: 2019,
    image: "/vehicles/mercedes-glc-220d-2019.jpg",

    description:
      "A refined compact SUV delivering comfort, safety, and premium Mercedes styling.",
    engine: "2.2L Diesel",
    transmission: "Automatic",
    drivetrain: "AWD",

    features: [
      "MBUX Infotainment",
      "Lane Assist",
      "Panoramic Sunroof",
    ],
  },

  {
    id: "mercedes-s500-2022",
    name: "Mercedes S500 - 2022",
    brand: "Mercedes",
    fuel: "Petrol",
    year: 2022,
    image: "/vehicles/mercedes-s500-2022.jpg",

    description:
      "The pinnacle of luxury sedans — unmatched comfort, innovation, and prestige.",
    engine: "3.0L Inline-6 Turbo",
    transmission: "Automatic",
    drivetrain: "AWD",

    features: [
      "Massage Seats",
      "Ambient Lighting",
      "Advanced Driver Assistance",
      "Executive Rear Seating",
    ],
  },
  {
  id: "bently-dynamic-ride",
  name: "Bentley Bentayga Dynamic Ride",
  brand: "Bentley",
  fuel: "Petrol",
  year: 2022,
  image: "/vehicles/bentley-bentayga-dynamic-ride.jpg",

  description:
  "The Bentley Bentayga Dynamic Ride blends ultra-luxury with astonishing performance — powered by a handcrafted V8 twin-turbo engine and advanced chassis systems for supreme comfort and agility.",
  engine: "4.0L Twin-Turbo V8",
  transmission: "8-Speed Automatic",
  drivetrain: "AWD",
  mileage: "8–12 km/l (approx.)",

  features: [
    "All-Wheel Drive (AWD)",
    "Dynamic Ride Control",
    "Luxury Leather Interior",
    "Panoramic Sunroof",
    "Advanced Infotainment System",
  ],

  gallery: [
    "/vehicles/bentley-dynamic-ride.jpg",
    "/vehicles/bentley-bentayga-interior.jpg",
    "/vehicles/bentley-bentayga-rear.jpg",
  ],
},
{
  id: "jeep",
  name: "Jeep Grand Cherokee",
  brand: "Jeep",
  fuel: "Petrol",
  year: 2021,
  image: "/vehicles/jeep-grand-cherokee.jpg",

  description:
    "The Jeep Grand Cherokee is a capable mid-size SUV with a rugged heritage, ideal for both daily driving and off-road adventures.",
  engine: "3.6L V6",
  transmission: "8-Speed Automatic",
  drivetrain: "AWD",
  mileage: "10–13 km/l (approx.)",

  features: [
    "Quadra-Trac AWD",
    "Heated Seats",
    "Uconnect Infotainment",
    "Trailer Tow Package",
    "Advanced Safety Suite",
  ],

  gallery: [
    "/vehicles/jeep.jpg",
    "/vehicles/jeep-interior.jpg",
    "/vehicles/jeep-offroad.jpg",
  ],
},

{
  id: "mercedes-glc-220d-2019",
  name: "Mercedes-Benz GLC 220d 4MATIC",
  brand: "Mercedes-Benz",
  fuel: "Diesel",
  year: 2019,
  image: "/vehicles/mercedes-glc-220d-2019.jpg",

  description:
    "A premium compact luxury SUV offering balanced performance, comfort, and fuel efficiency — with Mercedes‑Benz quality and refinement.",
  engine: "2.0L Turbo Diesel",
  transmission: "9-Speed Automatic",
  drivetrain: "AWD (4MATIC)",
  mileage: "12–15 km/l (approx.)",

  features: [
    "Mercedes‑Benz 4MATIC AWD",
    "LED Lighting",
    "MBUX Infotainment",
    "Panoramic Sunroof",
    "Driver Assistance Package",
  ],

  gallery: [
    "/vehicles/mercedes-glc-220d-2019.jpg",
    "/vehicles/mercedes-glc-interior.jpg",
  ],
},

{
  id: "mercedes-awd-4matic",
  name: "Mercedes-Benz AWD 4MATIC",
  brand: "Mercedes-Benz",
  fuel: "Petrol",
  year: 2022,
  image: "/vehicles/mercedes-awd-4matic.jpg",

  description:
    "This AWD 4MATIC Mercedes offers confident all‑weather capability with refined performance and the hallmark comfort expected of the brand.",
  engine: "2.0L Turbo I4",
  transmission: "9-Speed Automatic",
  drivetrain: "AWD (4MATIC)",
  mileage: "11–14 km/l (approx.)",

  features: [
    "4MATIC All-Wheel Drive",
    "Luxury Interior",
    "High‑Res Infotainment",
    "Adaptive Cruise Control",
    "LED Headlights",
  ],

  gallery: [
    "/vehicles/mercedes-awd-4matic.jpg",
    "/vehicles/mercedes-awd-interior.jpg",
  ],
},
{
  id: "range-rover-vogue-2023",
  name: "Range Rover Vogue 2023",
  brand: "Land Rover",
  fuel: "Petrol",
  year: 2023,
  image: "/vehicles/range-rover-vogue-2023.jpg",

  description:
    "The 2023 Range Rover Vogue combines supreme luxury with robust off‑road prowess, adaptive air suspension, and a refined interior tailored for comfort and style.", 
  engine: "3.0L Inline‑6 Turbo (mild hybrid)",
  transmission: "8-Speed Automatic",
  drivetrain: "AWD",
  mileage: "9–12 km/l (approx.)",

  features: [
    "Adaptive Air Suspension",
    "Terrain Response 2",
    "Meridian™ Sound System",
    "Panoramic Sunroof",
    "Advanced Safety Package",
  ],

  gallery: [
    "/vehicles/range-rover-vogue-2023.jpg",
    "/vehicles/range-rover-vogue-interior.jpg",
  ],
},

{
  id: "mercedes-amg-c63-s",
  name: "Mercedes‑AMG C63 S",
  brand: "Mercedes‑Benz",
  fuel: "Petrol",
  year: 2021,
  image: "/vehicles/mercedes-amg-c63-s.jpg",

  description:
    "High‑performance AMG‑tuned sedan with a hand‑built twin‑turbo 4.0L V8 engine, delivering exhilarating acceleration and sculpted styling.",
  engine: "4.0L Twin‑Turbo V8",
  transmission: "9‑Speed Automatic",
  drivetrain: "RWD",
  mileage: "6–9 km/l (approx.)",

  features: [
    "AMG Performance Exhaust",
    "Sports Seats",
    "Dual Zone Climate Control",
    "Performance Brakes",
    "MBUX Infotainment",
  ],

  gallery: [
    "/vehicles/mercedes-amg-c63-s.jpg",
    "/vehicles/mercedes-amg-c63-interior.jpg",
  ],
},

{
  id: "range-rover-vogue-autobiography-2023",
  name: "Range Rover Vogue Autobiography 2023",
  brand: "Land Rover",
  fuel: "Petrol",
  year: 2023,
  image: "/vehicles/range-rover-vogue-autobiography-2023.jpg",

  description:
    "The Autobiography trim elevates the Range Rover with executive luxury features, semi‑aniline leather seats, and advanced off‑road capability with adaptive air suspension and Terrain Response systems. ", 
  engine: "3.0L Turbo‑charged Inline‑6",
  transmission: "8‑Speed Automatic",
  drivetrain: "AWD",
  mileage: "9–12 km/l (approx.)",

  features: [
    "SV Autobiography Luxury Package",
    "Adaptive Dynamics",
    "Meridian™ Signature Sound",
    "Heads‑Up Display",
    "Panoramic Roof",
  ],
  
  gallery: [
    "/vehicles/range-rover-vogue-autobiography-2023.jpg",
    "/vehicles/range-rover-autobiography-interior.jpg",
  ],
},

];
