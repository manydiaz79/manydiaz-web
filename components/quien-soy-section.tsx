import { Heart, Award, Users, TrendingUp } from "lucide-react"

const highlights = [
  {
    icon: Award,
    title: "Certificación Profesional",
    description: "Formado con los más altos estándares en terapia de masaje y bienestar integral.",
  },
  {
    icon: Users,
    title: "+3,000 Clientes",
    description: "Más de tres mil personas han experimentado la transformación a través de mis manos.",
  },
  {
    icon: Heart,
    title: "Trato Personalizado",
    description: "Cada sesión es diseñada específicamente para tu cuerpo y tus necesidades.",
  },
  {
    icon: TrendingUp,
    title: "Empresario del Masaje",
    description: "Construí un negocio rentable y sostenible con el masaje como herramienta principal.",
  },
]

export default function QuienSoySection() {
  return (
    <section id="quien-soy" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-12 bg-primary" />
          <span className="text-primary text-xs font-body uppercase tracking-[0.3em] font-medium">
            Quién Soy
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/b5Um1y34DCDRHNOTco0QC-21YEGp6kZauxq2qVm1uJlXm6z8QIvj.jpg"
                alt="Many Díaz realizando masaje terapéutico profesional en su consultorio en Panamá"
                className="w-full h-auto object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-xl">
                <p className="text-2xl font-sans font-bold text-primary leading-none">4</p>
                <p className="text-xs font-body text-muted-foreground uppercase tracking-wide mt-1">
                  Años de<br />experiencia
                </p>
              </div>
            </div>
            {/* Decorative blocks */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-2xl -z-10" />
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground leading-tight mb-6 text-balance">
              Hola, soy{" "}
              <span className="text-primary">Many Díaz</span>
            </h2>

            <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-base">
              <p>
                Soy masajista terapéutico en Panamá con 4 años de experiencia y más de
                3,000 clientes atendidos. Mi trabajo es eliminar el dolor muscular, liberar
                contracturas, mejorar la circulación y corregir la postura corporal — con
                técnica y resultados.
              </p>
              <p>
                También soy emprendedor. A través del sistema{" "}
                <strong className="text-foreground">Vivir del Masaje</strong>, ayudo a
                masajistas, terapeutas y personas que quieren entrar al mundo del masaje
                desde cero, a construir una oferta clara, pensar como empresarios y vivir
                de su profesión con resultados reales y un negocio que funciona.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="tel:66909417"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-body font-medium text-sm tracking-wide hover:opacity-90 transition-all"
              >
                Hablar con Many
              </a>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-sans font-semibold text-foreground text-sm mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
