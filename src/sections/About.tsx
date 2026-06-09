import { motion } from "framer-motion"
import { Building2, Clock, Award, Globe } from "lucide-react"
import SectionTitle from "@/components/SectionTitle"
import { fadeUp } from "@/components/SectionTitle"

const milestones = [
  { year: "2015", event: "Star Cable USA founded in New York City" },
  { year: "2018", event: "Expanded to 25 states, surpassed 100K subscribers" },
  { year: "2021", event: "Launched 4K Ultra HD streaming platform" },
  { year: "2023", event: "Reached all 50 states and 400K+ subscribers" },
  { year: "2026", event: "500K subscribers, #1 rated IPTV service in the US" },
]

const values = [
  { icon: Clock, title: "Always Reliable", desc: "99.9% uptime with redundant infrastructure across 5 US data centers." },
  { icon: Award, title: "Award Winning", desc: "Best IPTV Service — Streaming Industry Awards 2024 & 2025." },
  { icon: Globe, title: "Truly Nationwide", desc: "Serving all 50 states including rural areas traditional cable can't reach." },
  { icon: Building2, title: "US-Based Team", desc: "Our customer support and engineering teams are proudly based in the USA." },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="About Us"
          title="America's Most Trusted IPTV Provider"
          description="Since 2015, Star Cable USA has been on a mission to make premium television accessible to every American — without the outrageous cable bills."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeUp}>
            <h3 className="text-xl font-bold text-foreground mb-8">Our Journey</h3>
            <div className="relative pl-6 border-l-2 border-[var(--brand-blue)]/30">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="mb-8 last:mb-0 relative"
                >
                  <div className="absolute -left-[1.65rem] top-0.5 w-4 h-4 rounded-full bg-[var(--brand-blue)] border-2 border-background" />
                  <span className="text-xs font-bold text-[var(--brand-blue)] uppercase tracking-widest">{m.year}</span>
                  <p className="text-foreground font-medium mt-1">{m.event}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-muted/50 border border-border hover:border-[var(--brand-blue)]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-blue)]/10 flex items-center justify-center mb-4">
                  <v.icon className="size-5 text-[var(--brand-blue)]" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
