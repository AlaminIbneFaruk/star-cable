import { Phone, Mail, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  Services: ["Basic Plan", "Premium Plan", "Ultimate Plan", "Business Solutions", "Bundle Deals"],
  Support: ["Help Center", "Device Setup", "Coverage Map", "Account Login", "Cancel Service"],
  Company: ["About Us", "Careers", "Press", "Partners", "Blog"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
}

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-dark)] text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--brand-red)] flex items-center justify-center">
                <span className="text-white font-black text-sm">SC</span>
              </div>
              <span className="text-white font-bold text-lg tracking-wide">
                STAR CABLE <span className="text-[var(--brand-red-light)]">USA</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              America's most trusted IPTV provider. Stream 1000+ channels in crystal clear 4K quality. No contracts, no satellite dishes, just pure entertainment.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:18005555555" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="size-4 text-[var(--brand-red)]" /> 1-800-555-5555
              </a>
              <a href="mailto:support@starcableusa.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="size-4 text-[var(--brand-red)]" /> support@starcableusa.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-[var(--brand-red)]" /> New York, NY 10001
              </span>
            </div>
            <div className="flex gap-3 mt-6">
              {["FB", "TW", "YT", "IG"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[var(--brand-red)] flex items-center justify-center transition-colors"
                >
                  <span className="text-white text-xs font-bold">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{section}</h4>
              <ul className="flex flex-col gap-2 text-sm">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/10 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Star Cable USA. All rights reserved.</p>
          <p>Available in all 50 states. FCC compliant. Equal Opportunity Provider.</p>
        </div>
      </div>
    </footer>
  )
}
