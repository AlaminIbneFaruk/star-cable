export type Package = {
  name: string
  price: number
  channels: string
  featured: boolean
  features: string[]
}

export const packages: Package[] = [
  {
    name: "Basic",
    price: 29,
    channels: "400+",
    featured: false,
    features: [
      "400+ channels",
      "HD quality",
      "2 simultaneous streams",
      "Cloud DVR (50 hrs)",
      "24/7 customer support",
    ],
  },
  {
    name: "Premium",
    price: 59,
    channels: "700+",
    featured: true,
    features: [
      "700+ channels",
      "4K Ultra HD",
      "5 simultaneous streams",
      "Cloud DVR (200 hrs)",
      "Sports & movies add-ons",
      "Priority support",
    ],
  },
  {
    name: "Ultimate",
    price: 99,
    channels: "1000+",
    featured: false,
    features: [
      "1000+ channels",
      "4K Ultra HD + HDR",
      "Unlimited streams",
      "Cloud DVR (unlimited)",
      "All premium add-ons",
      "Dedicated account manager",
    ],
  },
]
