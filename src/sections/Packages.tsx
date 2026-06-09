import { motion } from "framer-motion"
import { packages } from "@/data/packages"
import PackageCard from "@/components/PackageCard"
import SectionTitle from "@/components/SectionTitle"
import { fadeUp } from "@/components/SectionTitle"

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Pricing Plans"
          title="Choose Your Perfect Package"
          description="Transparent pricing with no hidden fees. All plans include free setup and a 7-day free trial."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((plan, i) => (
            <motion.div
              key={plan.name}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <PackageCard plan={plan} />
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          All plans include a 7-day free trial. No credit card required to start. Cancel anytime.
        </motion.p>
      </div>
    </section>
  )
}
