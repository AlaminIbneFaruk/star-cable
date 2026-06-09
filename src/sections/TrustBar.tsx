import { motion } from "framer-motion"
import { Tv2, Globe, Award, Users } from "lucide-react"
import { fadeUp } from "@/components/SectionTitle"

const stats = [
  { icon: Users, value: "500,000+", label: "Active Subscribers" },
  { icon: Tv2, value: "1,000+", label: "Live Channels" },
  { icon: Globe, value: "50", label: "States Covered" },
  { icon: Award, value: "4.9/5", label: "Customer Rating" },
]

export default function TrustBar() {
  return (
    <section className="py-16 bg-[var(--brand-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--brand-red)]/20 flex items-center justify-center">
                  <stat.icon className="size-5 text-[var(--brand-red-light)]" />
                </div>
              </div>
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
