import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, CheckCircle2, XCircle } from "lucide-react"
import SectionTitle from "@/components/SectionTitle"
import { fadeUp } from "@/components/SectionTitle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Coverage() {
  const [zip, setZip] = useState("")
  const [result, setResult] = useState<"available" | "unavailable" | null>(null)

  const check = () => {
    if (zip.length >= 5) {
      setResult("available")
    }
  }

  return (
    <section id="coverage" className="py-24 bg-[var(--brand-dark)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,87,216,0.2),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Service Area"
          title="Available in All 50 States"
          description="Star Cable USA delivers crystal-clear streaming to every corner of the country — from rural towns to major cities."
          light
        />

        <motion.div
          {...fadeUp}
          className="max-w-xl mx-auto"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--brand-red)]/20 flex items-center justify-center">
                <MapPin className="size-5 text-[var(--brand-red-light)]" />
              </div>
              <h3 className="text-white font-bold text-xl">Check Your Coverage</h3>
            </div>

            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="Enter ZIP Code"
                maxLength={5}
                value={zip}
                onChange={(e) => {
                  setZip(e.target.value.replace(/\D/g, ""))
                  setResult(null)
                }}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:border-[var(--brand-blue)] focus-visible:ring-[var(--brand-blue)]/20"
                onKeyDown={(e) => e.key === "Enter" && check()}
              />
              <Button
                onClick={check}
                className="bg-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/90 text-white border-0 px-6"
              >
                Check
              </Button>
            </div>

            {result === "available" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
              >
                <CheckCircle2 className="size-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-green-300 font-semibold text-sm">Service Available!</p>
                  <p className="text-green-400/70 text-xs">Star Cable USA is available in your area. Get started today.</p>
                </div>
              </motion.div>
            )}
            {result === "unavailable" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
              >
                <XCircle className="size-5 text-red-400 flex-shrink-0" />
                <p className="text-red-300 text-sm">Service not yet available in your area. Join our waitlist!</p>
              </motion.div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 text-center">
            {["Northeast", "South", "Midwest", "West", "Southwest", "Northwest"].map((region) => (
              <div key={region} className="text-white/40 text-xs py-2 px-3 rounded-lg bg-white/5 border border-white/10">
                {region}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
