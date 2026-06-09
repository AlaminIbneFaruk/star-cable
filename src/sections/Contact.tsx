import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MessageSquare } from "lucide-react"
import SectionTitle from "@/components/SectionTitle"
import { fadeUp } from "@/components/SectionTitle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Get In Touch"
          title="We're Here to Help"
          description="Have questions? Our team is standing by. Reach us by phone, email, or the form below."
        />

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="flex flex-col gap-6">
            {[
              {
                icon: Phone,
                title: "Call Us",
                detail: "1-800-555-5555",
                sub: "Mon–Sun, 7am–11pm ET",
              },
              {
                icon: Mail,
                title: "Email Us",
                detail: "support@starcableusa.com",
                sub: "Response within 2 hours",
              },
              {
                icon: MessageSquare,
                title: "Live Chat",
                detail: "Chat Now",
                sub: "Available 24/7 on our site",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                className="flex items-start gap-4 p-5 rounded-xl border border-border hover:border-[var(--brand-blue)]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-red)]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="size-5 text-[var(--brand-red)]" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{item.title}</p>
                  <p className="text-foreground font-medium text-sm mt-0.5">{item.detail}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="lg:col-span-2">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl bg-[var(--brand-blue)]/5 border border-[var(--brand-blue)]/20"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <Send className="size-7 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">
                  Thank you for reaching out. A member of our team will contact you within 2 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" required />
                  <Input type="email" placeholder="Email Address" required />
                </div>
                <Input placeholder="Phone Number (optional)" type="tel" />
                <Input placeholder="Subject" required />
                <Textarea
                  rows={5}
                  placeholder="How can we help you today?"
                  required
                  className="resize-none"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-[var(--brand-red)] hover:bg-[var(--brand-red-light)] text-white border-0 font-semibold self-start px-8"
                >
                  Send Message <Send className="size-4" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
