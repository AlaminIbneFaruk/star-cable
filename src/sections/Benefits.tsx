import { motion } from "framer-motion"
import { Tv, Wifi, Shield, Headphones, Smartphone, Zap } from "lucide-react"
import SectionTitle from "@/components/SectionTitle"
import { fadeUp } from "@/components/SectionTitle"

const benefits = [
  {
    icon: Tv,
    title: "1000+ HD Channels",
    description: "Access every channel you love — sports, news, movies, kids, and international content in one place.",
  },
  {
    icon: Wifi,
    title: "No Dish Required",
    description: "Stream over your existing internet connection. No satellite installation, no cable wiring.",
  },
  {
    icon: Zap,
    title: "4K Ultra HD",
    description: "Experience crystal-clear picture quality with Dolby Atmos surround sound on Premium and Ultimate plans.",
  },
  {
    icon: Smartphone,
    title: "Watch Anywhere",
    description: "Stream on your TV, phone, tablet, laptop, or streaming stick — wherever life takes you.",
  },
  {
    icon: Shield,
    title: "No Long Contracts",
    description: "Subscribe month-to-month with the freedom to cancel anytime. Zero hidden fees or setup costs.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our US-based support team is always here to help via phone, chat, or email at any hour.",
  },
]

export default function Benefits() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Why Star Cable"
          title="Everything You Need, Nothing You Don't"
          description="Built for cord-cutters who demand more. We deliver every feature of traditional cable — without the cable company."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl border border-border hover:border-[var(--brand-blue)]/40 hover:bg-[var(--brand-blue)]/3 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--brand-blue)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-blue)]/20 transition-colors">
                <item.icon className="size-6 text-[var(--brand-blue)]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
