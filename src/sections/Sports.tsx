import { motion } from "framer-motion"
import { Trophy, Tv2 } from "lucide-react"
import SectionTitle from "@/components/SectionTitle"
import { fadeUp } from "@/components/SectionTitle"

const leagues = [
  { name: "NFL", desc: "All regular season + playoffs" },
  { name: "NBA", desc: "Full season + Finals" },
  { name: "MLB", desc: "Every game, all season" },
  { name: "NHL", desc: "Regular season + Stanley Cup" },
  { name: "MLS", desc: "Major League Soccer" },
  { name: "UFC", desc: "Fight nights & PPV events" },
  { name: "Tennis", desc: "Grand Slams & ATP/WTA tours" },
  { name: "Golf", desc: "PGA, Masters, US Open" },
]

export default function Sports() {
  return (
    <section className="py-24 bg-[var(--brand-dark)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,87,216,0.15),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Live Sports"
          title="Never Miss a Game Again"
          description="Every major league, every major sport — streamed live in HD. Start watching before the first whistle."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leagues.map((league, i) => (
            <motion.div
              key={league.name}
              {...fadeUp}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group rounded-2xl bg-white/5 hover:bg-[var(--brand-blue)]/20 border border-white/10 hover:border-[var(--brand-blue)]/40 p-6 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-red)]/20 flex items-center justify-center flex-shrink-0">
                  <Trophy className="size-5 text-[var(--brand-red-light)]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{league.name}</h3>
                  <p className="text-white/40 text-sm mt-1">{league.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          className="mt-16 rounded-2xl bg-gradient-to-r from-[var(--brand-blue)]/20 to-[var(--brand-red)]/20 border border-white/10 p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[var(--brand-red)] flex items-center justify-center flex-shrink-0">
              <Tv2 className="size-7 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl">Sports Package Add-On</h3>
              <p className="text-white/60 text-sm">RedZone, NFL Network & 50+ premium sports channels</p>
            </div>
          </div>
          <div className="text-center">
            <span className="text-3xl font-black text-white">+$15</span>
            <span className="text-white/60 text-sm block">/month</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
