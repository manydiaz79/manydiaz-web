"use client"

import { Check, ArrowRight, Sparkles } from "lucide-react"

const productos = [
  {
    id: "sistema-practico",
    tag: "Sistema Práctico",
    tagBg: "bg-primary",
    title: "Vivir del Masaje",
    subtitle: "Sistema práctico para profesionalizar tu práctica",
    description:
      "Todo lo que necesitas para convertirte en un terapeuta de masaje profesional y empezar a generar ingresos consistentes con tu práctica.",
    colorFrom: "from-primary",
    colorTo: "to-primary/70",
    textColor: "text-white",
    features: [
      "Fundamentos esenciales del masaje terapéutico",
      "Técnicas de profesionalización comprobadas",
      "Gestión y atracción de clientes",
      "Herramientas para fijar precios correctamente",
      "Mentalidad de negocio exitoso",
      "Comunidad de terapeutas activa",
    ],
    cta: "Quiero el Sistema Práctico",
    popular: true,
  },
  {
    id: "mentoria",
    tag: "Mentoría",
    tagBg: "bg-secondary",
    title: "Vivir del Masaje",
    subtitle: "Mentoría personalizada 1 a 1 con Many Díaz",
    description:
      "Lleva tu práctica al siguiente nivel con acompañamiento directo. Trabajo contigo de forma personalizada para escalar tu negocio de masajes.",
    colorFrom: "from-secondary",
    colorTo: "to-secondary/70",
    textColor: "text-white",
    features: [
      "Sesiones 1 a 1 con Many Díaz",
      "Plan personalizado para tu negocio",
      "Comunicación efectiva con clientes",
      "Estrategias avanzadas de marketing",
      "Mentalidad y confianza profesional",
      "Soporte directo por WhatsApp",
    ],
    cta: "Quiero la Mentoría",
    popular: false,
  },
]

export default function ProductosSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="productos" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-xs font-body uppercase tracking-[0.3em] font-medium">
              Programas
            </span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground text-balance mb-4">
            Transforma tu negocio
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto leading-relaxed text-pretty">
            Como masajista profesional, estos son los dos caminos para que empieces a vivir
            de tu pasión con estructura, claridad y resultados reales.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className={`relative rounded-2xl overflow-hidden shadow-xl flex flex-col ${
                producto.popular ? "ring-2 ring-secondary ring-offset-4" : ""
              }`}
            >
              {producto.popular && (
                <div className="absolute top-5 right-5 z-10">
                  <span className="flex items-center gap-1 bg-accent text-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    Más Popular
                  </span>
                </div>
              )}

              {/* Card header with gradient */}
              <div className={`bg-gradient-to-br ${producto.colorFrom} ${producto.colorTo} p-8 pb-10`}>
                <span
                  className={`inline-block ${producto.tagBg} bg-white/20 ${producto.textColor} text-xs font-body uppercase tracking-widest px-3 py-1 rounded-full mb-4`}
                >
                  {producto.tag}
                </span>
                <h3 className={`text-3xl font-sans font-extrabold ${producto.textColor} leading-tight`}>
                  {producto.title}
                </h3>
                <p className={`${producto.textColor} font-sans font-semibold text-sm mt-1 opacity-90`}>
                  {producto.subtitle}
                </p>
              </div>

              {/* Card body */}
              <div className="bg-card border border-border rounded-b-2xl p-8 flex flex-col flex-1 -mt-4">
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                  {producto.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {producto.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="font-body text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo("contacto")}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-body font-semibold text-sm tracking-wide transition-all duration-200 ${
                    producto.popular
                      ? "bg-secondary text-secondary-foreground hover:opacity-90"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  {producto.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Also offering massage sessions */}
        <div className="mt-12 bg-card border border-border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-sans font-bold text-foreground mb-1">
              Sesiones de Masaje Terapéutico
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-lg">
              Tambien ofrezco sesiones de masaje personalizadas en mi consulta de C. 59 Este,
              Panama. Reserva tu sesion hoy y siente la diferencia.
            </p>
          </div>
          <button
            onClick={() => scrollTo("contacto")}
            className="shrink-0 bg-primary text-primary-foreground px-7 py-3 rounded-full font-body font-medium text-sm tracking-wide hover:opacity-90 transition-all"
          >
            Reservar sesión
          </button>
        </div>
      </div>
    </section>
  )
}
