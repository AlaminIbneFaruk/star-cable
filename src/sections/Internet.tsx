import { motion } from "framer-motion"
import { Wifi, CheckCircle2 } from "lucide-react"
import SectionTitle from "@/components/SectionTitle"
import { fadeUp } from "@/components/SectionTitle"

const speeds = [
  { speed: "10 Mbps", label: "HD Streaming", note: "1-2 devices" },
  { speed: "25 Mbps", label: "4K Streaming", note: "2-3 devices" },
  { speed: "50 Mbps", label: "4K + Multi-Room", note: "4-6 devices" },
  { speed: "100+ Mbps", label: "Whole Home 4K", note: "Unlimited devices" },
]

export default function Internet() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <SectionTitle
              eyebrow="Internet Requirements"
              title="Works With Any Internet Connection"
              description="Star Cable USA streams beautifully over your existing home internet. Here's what to expect at different speeds."
            />

            <div className="flex flex-col gap-4 mt-8">
              {speeds.map((s, i) => (
                <motion.div
                  key={s.speed}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <Wifi className="size-5 text-[var(--brand-blue)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-foreground">{s.speed}</span>
                      <span className="text-xs text-muted-foreground">{s.note}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                  </div>
                  <CheckCircle2 className="size-5 text-green-500 flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-[var(--brand-dark)] p-8 text-white"
          >
            <h3 className="text-2xl font-black mb-2">Bundle & Save More</h3>
            <p className="text-white/60 text-sm mb-8">
              Partner with a local ISP through Star Cable and save up to $30/month when you bundle internet + TV.
            </p>

            <div className="space-y-4">
              {[
                { label: "TV + Internet Bundle", saving: "Save $20/mo" },
                { label: "TV + Internet + Phone", saving: "Save $30/mo" },
                { label: "Business Bundle", saving: "Save $50/mo" },
              ].map((bundle) => (
                <div
                  key={bundle.label}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <span className="text-white font-medium text-sm">{bundle.label}</span>
                  <span className="text-[var(--brand-red-light)] font-bold text-sm">{bundle.saving}</span>
                </div>
              ))}
            </div>

            <p className="text-white/40 text-xs mt-6">
              Bundle availability varies by region. Contact sales for details.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
