import { Phone, MapPin, Star } from "lucide-react"

const navLinks = [
  { id: "quien-soy", label: "Quién Soy" },
  { id: "productos", label: "Productos" },
  { id: "testimonios", label: "Testimonios" },
  { id: "contacto", label: "Contacto" },
]

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="text-2xl font-sans font-bold tracking-wide text-primary">
                MANY
              </p>
              <p className="text-3xl font-sans font-extrabold tracking-wider text-white">
                DÍAZ
              </p>
              <p className="text-xs tracking-widest uppercase text-white/50 mt-1">
                Masaje Terapéutico Personalizado
              </p>
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed max-w-xs">
              Masajista profesional en Panamá. 4 años de experiencia y más de 3,000
              clientes atendidos con dedicación y resultados reales.
            </p>
            {/* Google rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white/50 text-xs font-body">
                32 opiniones de 5 estrellas en Google
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-body uppercase tracking-[0.3em] text-white/40 mb-6">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="font-body text-white/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-body uppercase tracking-[0.3em] text-white/40 mb-6">
              Contacto
            </h3>
            <div className="space-y-4">
              <a
                href="tel:66909417"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="font-body text-white/70 text-sm group-hover:text-white transition-colors">
                  6690-9417
                </span>
              </a>

              <a
                href="https://maps.google.com/?q=C.+59+Este+Panama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="font-body text-white/70 text-sm group-hover:text-white transition-colors leading-relaxed">
                  C. 59 Este, Panamá,
                  <br />
                  Provincia de Panamá
                </span>
              </a>

              <a
                href="https://wa.me/50766909417"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-body font-medium text-sm transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Many Díaz - Masaje Terapéutico Personalizado. Todos los derechos reservados.
          </p>
          <p className="font-body text-white/20 text-xs">
            Panamá, República de Panamá
          </p>
        </div>
      </div>
    </footer>
  )
}
