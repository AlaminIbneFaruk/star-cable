import { motion } from "framer-motion"

export const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
  viewport: { once: true },
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  light?: boolean
}) {
  return (
    <motion.div className="text-center max-w-2xl mx-auto mb-16" {...fadeUp}>
      {eyebrow && (
        <span className={`text-xs font-bold uppercase tracking-widest mb-3 block ${light ? "text-[var(--brand-red-light)]" : "text-[var(--brand-blue)]"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl font-black tracking-tight mb-4 ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${light ? "text-white/60" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
