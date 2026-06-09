import { motion } from "framer-motion"
import { Play, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--brand-dark)]">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-dark)] via-[#0a2260] to-[#0d0d2b]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,87,216,0.3),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(230,57,70,0.2),transparent_60%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="mb-6 bg-[var(--brand-red)]/20 text-[var(--brand-red-light)] border border-[var(--brand-red)]/30 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            🇺🇸 Now Available Nationwide
          </Badge>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
            Unlimited{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-red)]">
              Entertainment
            </span>{" "}
            Without Traditional Cable
          </h1>

          <p className="text-lg text-white/60 mb-8 max-w-lg leading-relaxed">
            Stream 1,000+ channels including live sports, blockbuster movies, and breaking news — all in stunning 4K Ultra HD. No dish. No contracts. No limits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              size="lg"
              className="bg-[var(--brand-red)] hover:bg-[var(--brand-red-light)] text-white border-0 font-bold px-8 h-12"
              asChild
            >
              <a href="#packages">
                View Packages <ChevronRight className="size-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent h-12 px-8"
              asChild
            >
              <a href="#channels">
                <Play className="size-4 fill-current" /> Browse Channels
              </a>
            </Button>
          </div>

          <div className="flex gap-8 text-center">
            {[
              { value: "1000+", label: "Channels" },
              { value: "4K", label: "Ultra HD" },
              { value: "$0", label: "Setup Fee" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest mt-1">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* TV Frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[var(--brand-blue)]/30 border border-white/10">
            <img
              src="/hero-tv.webp"
              alt="Star Cable USA streaming on modern TV"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex gap-2">
                {["LIVE", "ESPN", "4K"].map((tag) => (
                  <span key={tag} className="bg-[var(--brand-red)] text-white text-xs font-bold px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating stat cards */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 bg-[var(--brand-blue)] text-white rounded-xl px-4 py-3 shadow-lg"
          >
            <div className="text-2xl font-black">500K+</div>
            <div className="text-xs text-white/70">Happy Subscribers</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-4 -left-4 bg-[var(--brand-dark)] border border-[var(--brand-red)]/40 text-white rounded-xl px-4 py-3 shadow-lg"
          >
            <div className="text-2xl font-black text-[var(--brand-red-light)]">4.9★</div>
            <div className="text-xs text-white/70">Average Rating</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
