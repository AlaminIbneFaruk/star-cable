import { motion } from "framer-motion"
import { faq } from "@/data/faq"
import SectionTitle from "@/components/SectionTitle"
import { fadeUp } from "@/components/SectionTitle"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before you sign up. Can't find your answer? Call us anytime."
        />

        <motion.div {...fadeUp}>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-background px-6 data-[state=open]:border-[var(--brand-blue)]/30 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
