import { useState } from "react"
import { motion } from "framer-motion"
import { channels, categories } from "@/data/channels"
import SectionTitle from "@/components/SectionTitle"
import { Button } from "@/components/ui/button"

export default function Channels() {
  const [active, setActive] = useState<string>("Sports")

  const filtered = channels.filter((c) => c.category === active)

  return (
    <section id="channels" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Channel Lineup"
          title="1,000+ Channels at Your Fingertips"
          description="From live sports to international news — we carry every channel your family loves."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={active === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActive(cat)}
              className={
                active === cat
                  ? "bg-[var(--brand-blue)] text-white border-0"
                  : "hover:border-[var(--brand-blue)]/50 hover:text-[var(--brand-blue)]"
              }
            >
              {cat}
            </Button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
        >
          {filtered.map((channel) => (
            <div
              key={channel.name}
              className="rounded-xl border border-border hover:border-[var(--brand-blue)]/40 bg-card p-4 flex flex-col items-center gap-3 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--brand-dark)] flex items-center justify-center">
                <span className="text-white font-black text-xs tracking-tight">{channel.logo}</span>
              </div>
              <span className="text-xs font-medium text-foreground text-center">{channel.name}</span>
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            Showing 5 of 1,000+ available channels. Full lineup available after sign-up.
          </p>
        </div>
      </div>
    </section>
  )
}
