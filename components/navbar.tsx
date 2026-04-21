"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { id: "quien-soy", label: "Quién Soy" },
  { id: "productos", label: "Productos" },
  { id: "testimonios", label: "Testimonios" },
  { id: "contacto", label: "Contacto" },
]

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo placeholder — left side intentionally empty */}
        <div className="w-10" aria-hidden="true" />

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8" role="navigation" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-body font-medium tracking-wide uppercase transition-all duration-200 relative group ${
                  scrolled
                    ? activeSection === link.id
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                    : activeSection === link.id
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
                aria-current={activeSection === link.id ? "page" : undefined}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                    activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button desktop */}
        <button
          onClick={() => scrollTo("contacto")}
          className="hidden md:block bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-body font-medium tracking-wide hover:opacity-90 transition-all"
        >
          Reservar sesión
        </button>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`w-full text-left px-6 py-3 text-sm font-body font-medium uppercase tracking-wide transition-colors ${
                    activeSection === link.id
                      ? "text-primary bg-muted"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="px-6 pt-3">
              <button
                onClick={() => scrollTo("contacto")}
                className="w-full bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-body font-medium tracking-wide hover:opacity-90 transition-all"
              >
                Reservar sesión
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
