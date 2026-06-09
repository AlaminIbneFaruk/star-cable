import { motion } from "framer-motion"
import { Monitor, Smartphone, Tablet, Tv } from "lucide-react"
import SectionTitle from "@/components/SectionTitle"
import { fadeUp } from "@/components/SectionTitle"

const devices = [
  {
    icon: Tv,
    name: "Smart TVs",
    desc: "Samsung, LG, Sony, Vizio, TCL",
  },
  {
    icon: Monitor,
    name: "Streaming Sticks",
    desc: "Roku, Fire TV, Chromecast, Apple TV",
  },
  {
    icon: Smartphone,
    name: "Smartphones",
    desc: "iOS & Android — any device",
  },
  {
    icon: Tablet,
    name: "Tablets & Laptops",
    desc: "iPad, Surface, MacBook, PC",
  },
]

export default function Devices() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Compatible Devices"
          title="Watch on Any Screen You Own"
          description="Star Cable USA works on every device you already have. No special hardware required."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map((device, i) => (
            <motion.div
              key={device.name}
              {...fadeUp}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group rounded-2xl border border-border hover:border-[var(--brand-blue)]/40 bg-card p-8 text-center transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-red)]/10 flex items-center justify-center mx-auto mb-6 group-hover:from-[var(--brand-blue)]/20 group-hover:to-[var(--brand-red)]/20 transition-all">
                <device.icon className="size-8 text-[var(--brand-blue)]" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{device.name}</h3>
              <p className="text-sm text-muted-foreground">{device.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
