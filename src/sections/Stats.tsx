import { motion } from "framer-motion"
import { fadeUp } from "@/components/SectionTitle"

const stats = [
  { value: "500K+", label: "Active Subscribers", sub: "and growing every day" },
  { value: "1,000+", label: "Live Channels", sub: "across every genre" },
  { value: "99.9%", label: "Uptime Guarantee", sub: "always-on reliability" },
  { value: "$0", label: "Setup Fee", sub: "start streaming instantly" },
  { value: "4K", label: "Ultra HD Quality", sub: "on compatible devices" },
  { value: "24/7", label: "Customer Support", sub: "US-based support team" },
]

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-r from-[var(--brand-dark)] via-[#0a2260] to-[var(--brand-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-[var(--brand-blue)]/30 transition-all"
            >
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-2">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-white/30 text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
