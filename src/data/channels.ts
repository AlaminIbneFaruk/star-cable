export type Channel = {
  name: string
  category: "Sports" | "Movies" | "Kids" | "News" | "International"
  logo: string
}

export const categories = ["Sports", "Movies", "Kids", "News", "International"] as const

export const channels: Channel[] = [
  { name: "ESPN", category: "Sports", logo: "ESPN" },
  { name: "NFL Network", category: "Sports", logo: "NFL" },
  { name: "Fox Sports", category: "Sports", logo: "FS" },
  { name: "NBA TV", category: "Sports", logo: "NBA" },
  { name: "Golf Channel", category: "Sports", logo: "GOLF" },
  { name: "HBO", category: "Movies", logo: "HBO" },
  { name: "Showtime", category: "Movies", logo: "SHO" },
  { name: "Starz", category: "Movies", logo: "STARZ" },
  { name: "Cinemax", category: "Movies", logo: "CMAX" },
  { name: "AMC", category: "Movies", logo: "AMC" },
  { name: "Disney Channel", category: "Kids", logo: "DIS" },
  { name: "Cartoon Network", category: "Kids", logo: "CN" },
  { name: "Nickelodeon", category: "Kids", logo: "NICK" },
  { name: "Disney Jr", category: "Kids", logo: "DJR" },
  { name: "PBS Kids", category: "Kids", logo: "PBS" },
  { name: "CNN", category: "News", logo: "CNN" },
  { name: "Fox News", category: "News", logo: "FOX" },
  { name: "MSNBC", category: "News", logo: "MSBC" },
  { name: "BBC News", category: "News", logo: "BBC" },
  { name: "Al Jazeera", category: "News", logo: "AJE" },
  { name: "Univision", category: "International", logo: "UNI" },
  { name: "Telemundo", category: "International", logo: "TEL" },
  { name: "TVE", category: "International", logo: "TVE" },
  { name: "TV5 Monde", category: "International", logo: "TV5" },
  { name: "RAI", category: "International", logo: "RAI" },
]
