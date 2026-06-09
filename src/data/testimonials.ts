export type Testimonial = {
  name: string
  location: string
  rating: number
  text: string
  plan: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Maria Rodriguez",
    location: "Miami, FL",
    rating: 5,
    text: "I switched from traditional cable and I'm saving $80 a month. The picture quality is incredible and I get every Spanish-language channel I need.",
    plan: "Premium",
  },
  {
    name: "James Thompson",
    location: "Dallas, TX",
    rating: 5,
    text: "NFL Sunday Ticket plus all the local channels. This is everything a football fan could want. Customer support was amazing when I had a setup question.",
    plan: "Ultimate",
  },
  {
    name: "Linda Park",
    location: "Los Angeles, CA",
    rating: 5,
    text: "The kids are happy with Nickelodeon and Disney, and I get my news and movies too. Setup took under 10 minutes. Highly recommend!",
    plan: "Basic",
  },
  {
    name: "David Chen",
    location: "New York, NY",
    rating: 5,
    text: "Business traveler here. Being able to stream on 5 devices from any hotel room across the country is a game changer. Worth every penny.",
    plan: "Premium",
  },
]
