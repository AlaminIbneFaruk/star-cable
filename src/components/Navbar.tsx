import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Packages", href: "#packages" },
  { label: "Channels", href: "#channels" },
  { label: "Coverage", href: "#coverage" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--brand-dark)]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[var(--brand-red)] flex items-center justify-center">
            <span className="text-white font-black text-sm">SC</span>
          </div>
          <span className="text-white font-bold text-lg tracking-wide">
            STAR CABLE <span className="text-[var(--brand-red-light)]">USA</span>
          </span>
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:18005555555"
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
          >
            <Phone className="size-4" />
            1-800-555-5555
          </a>
          <Button
            size="sm"
            className="bg-[var(--brand-red)] hover:bg-[var(--brand-red-light)] text-white border-0"
          >
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--brand-dark)]/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-[var(--brand-red)] hover:bg-[var(--brand-red-light)] text-white border-0 w-fit"
          >
            Get Started
          </Button>
        </div>
      )}
    </nav>
  )
}
