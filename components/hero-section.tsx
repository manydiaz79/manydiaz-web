"use client"

import { Star, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://placehold.co/1920x1080?text=Serene+massage+therapy+session+with+warm+teal+and+green+tones+professional+wellness+spa+environment"
          alt="Ambiente profesional de terapia de masaje con tonos tranquilos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Google badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-8">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-white text-sm font-body font-medium">
            32 opiniones de 5 estrellas en Google
          </span>
        </div>

        <p className="text-white/80 text-sm font-body tracking-[0.3em] uppercase mb-3">
          Masaje Terapéutico Personalizado
        </p>

        <h1 className="text-5xl md:text-7xl font-sans font-extrabold text-white leading-tight mb-8 text-balance">
          MANY
          <br />
          <span className="text-accent">DÍAZ</span>
        </h1>

        <p className="text-white/90 text-lg md:text-xl font-body font-light leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
          Masajista profesional en Panamá con 4 años de experiencia y más de 3,000 clientes
          atendidos. Cada sesión es diseñada para tu cuerpo y tus necesidades.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("productos")}
            className="bg-white text-primary px-8 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide hover:bg-accent hover:text-foreground transition-all duration-200 shadow-lg"
          >
            Ver Programas
          </button>
          <button
            onClick={() => scrollTo("contacto")}
            className="border-2 border-white text-white px-8 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide hover:bg-white hover:text-primary transition-all duration-200"
          >
            Reservar Sesión
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-white/20">
          {[
            { value: "3,000+", label: "Clientes atendidos" },
            { value: "4", label: "Años de experiencia" },
            { value: "100%", label: "Personalizado" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-sans font-bold text-white">{stat.value}</p>
              <p className="text-white/70 text-xs font-body uppercase tracking-wide mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("quien-soy")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
