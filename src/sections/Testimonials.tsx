import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { testimonials } from "@/data/testimonials"
import SectionTitle from "@/components/SectionTitle"
import { fadeUp } from "@/components/SectionTitle"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Customer Reviews"
          title="Loved by Half a Million Subscribers"
          description="Real customers, real stories. See why families across America are making the switch."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <CardContent className="flex-1 flex flex-col gap-4 pt-6">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="size-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>
                  <div className="flex items-end justify-between pt-2 border-t border-border">
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {t.plan}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
