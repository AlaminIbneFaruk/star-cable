import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Package } from "@/data/packages"

export default function PackageCard({ plan }: { plan: Package }) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
        plan.featured
          ? "border-2 border-[var(--brand-blue)] bg-[var(--brand-dark)] text-white shadow-xl shadow-[var(--brand-blue)]/20"
          : "border border-border hover:border-[var(--brand-blue)]/50"
      )}
    >
      {plan.featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-red)] to-[var(--brand-blue)]" />
      )}

      <CardHeader className="pb-0">
        <div className="flex items-start justify-between">
          <div>
            {plan.featured && (
              <Badge className="mb-2 bg-[var(--brand-red)] text-white border-0 text-xs">
                <Star className="size-3 mr-1 fill-current" /> Most Popular
              </Badge>
            )}
            <h3 className={cn("text-xl font-bold", plan.featured ? "text-white" : "text-foreground")}>
              {plan.name}
            </h3>
            <p className={cn("text-sm mt-1", plan.featured ? "text-white/60" : "text-muted-foreground")}>
              {plan.channels} Channels
            </p>
          </div>
          <div className="text-right">
            <span className={cn("text-4xl font-black", plan.featured ? "text-white" : "text-foreground")}>
              ${plan.price}
            </span>
            <span className={cn("text-sm block", plan.featured ? "text-white/60" : "text-muted-foreground")}>
              /month
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        <ul className="flex flex-col gap-3 mb-8">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-sm">
              <div className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                plan.featured ? "bg-[var(--brand-red)]" : "bg-[var(--brand-blue)]/10"
              )}>
                <Check className={cn("size-3", plan.featured ? "text-white" : "text-[var(--brand-blue)]")} />
              </div>
              <span className={plan.featured ? "text-white/80" : "text-muted-foreground"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Button
          className={cn(
            "w-full font-semibold transition-all",
            plan.featured
              ? "bg-[var(--brand-red)] hover:bg-[var(--brand-red-light)] text-white border-0"
              : "bg-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/90 text-white border-0"
          )}
        >
          Choose {plan.name}
        </Button>
      </CardContent>
    </Card>
  )
}
