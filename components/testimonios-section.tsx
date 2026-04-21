"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonios = [
  {
    name: "Jessica Justavino",
    initials: "JJ",
    rating: 5,
    date: "Hace 5 semanas",
    text: "Excelente pues al ser 100% manual no es solo un masaje, es una experiencia de bienestar. La técnica que usa me ayudó muchísimo.",
    color: "bg-primary",
  },
  {
    name: "Myriam Rosario",
    initials: "MR",
    rating: 5,
    date: "Hace 23 semanas",
    text: "Excelente profesional, muy recomendado. Buena ubicación.",
    color: "bg-secondary",
  },
  {
    name: "Claudio Solon",
    initials: "CS",
    rating: 5,
    date: "Hace 28 semanas",
    text: "Excelente profesional.",
    color: "bg-primary",
  },
  {
    name: "ALFREDO TUMAX",
    initials: "AT",
    rating: 5,
    date: "30 may 2024",
    text: "Muy profesional, alivió mi dolor de espalda desde la primera sesión.",
    color: "bg-secondary",
  },
  {
    name: "Andres Ojeda",
    initials: "AO",
    rating: 5,
    date: "16 may 2024",
    text: "Many es un profesional increíble y un ser humano con muchísima empatía, y enfocadísimo en obtener resultados.",
    color: "bg-primary",
  },
  {
    name: "Noemy Ruiz Santamaria",
    initials: "NR",
    rating: 5,
    date: "24 feb 2024",
    text: "Los masajes terapéuticos me han servido muchísimo en mis dolores de espalda, disminuyendo considerablemente y brindándome una mejor calidad de vida. Los recomiendo a ojos cerrados.",
    color: "bg-secondary",
  },
  {
    name: "JULIETA JORDAN",
    initials: "JJ",
    rating: 5,
    date: "19 feb 2024",
    text: "Many es un profesional en todo el sentido de la palabra, me encanta su trabajo, lo recomiendo.",
    color: "bg-primary",
  },
  {
    name: "Angel Sosa Lombardo",
    initials: "AS",
    rating: 5,
    date: "18 feb 2024",
    text: "Los masajes terapéuticos han sido de gran ayuda para aliviar mis dolores cervicales y el manguito rotador.",
    color: "bg-secondary",
  },
  {
    name: "Alex Navarro",
    initials: "AN",
    rating: 5,
    date: "18 feb 2024",
    text: "Por primera vez me atendí con el licenciado Many Díaz y me siento bastante bien de mi dolor de espalda baja. Muy profesional y sobre todo muy honesto.",
    color: "bg-primary",
  },
  {
    name: "Roberto Gaete",
    initials: "RG",
    rating: 5,
    date: "9 feb 2024",
    text: "Excelente profesional, recomendado.",
    color: "bg-secondary",
  },
  {
    name: "Gean Castillo",
    initials: "GC",
    rating: 5,
    date: "9 feb 2024",
    text: "Many es un excelente profesional, su guía y sus procedimientos me han ayudado a mejorar día a día. Siempre hace espacio de donde no hay para atenderme.",
    color: "bg-primary",
  },
  {
    name: "JORGE DIAZ",
    initials: "JD",
    rating: 5,
    date: "7 feb 2024",
    text: "Excelente atención y profesional al 100%. Servicio puntual según cita y sitio céntrico. Masajes y terapias efectivas.",
    color: "bg-secondary",
  },
  {
    name: "Angelica MP",
    initials: "AM",
    rating: 5,
    date: "7 feb 2024",
    text: "Excelente servicio y atención, muy profesional.",
    color: "bg-primary",
  },
  {
    name: "Veronica Bermudez",
    initials: "VB",
    rating: 5,
    date: "14 ene 2024",
    text: "Lo máximo, vale la pena. Excelente profesional, sentí mejoría desde la primera sesión.",
    color: "bg-secondary",
  },
  {
    name: "Arquimedes Rivera",
    initials: "AR",
    rating: 5,
    date: "14 ene 2024",
    text: "Excelente masaje terapéutico, 100% recomendado. En tu rutina de ejercicio habitual esto es un excelente complemento.",
    color: "bg-primary",
  },
  {
    name: "Miguel Espinoza",
    initials: "ME",
    rating: 5,
    date: "14 ene 2024",
    text: "Excelente masaje. Uno queda súper relajado. 100% recomendado.",
    color: "bg-secondary",
  },
  {
    name: "Acelerador DeONG",
    initials: "AD",
    rating: 5,
    date: "27 nov 2023",
    text: "Many es un profesional excelente y empático. Entiende muy bien las contracturas de larga data y tiene un approach holístico en sus intervenciones. Lo recomiendo.",
    color: "bg-primary",
  },
  {
    name: "Sue Helen",
    initials: "SH",
    rating: 5,
    date: "26 nov 2023",
    text: "Excelente atención y profesionalismo, no es simplemente un masaje terapéutico, muchas veces también es un masaje para el ALMA. Gracias Many por tu entrega y pasión por lo que haces.",
    color: "bg-secondary",
  },
  {
    name: "María Felipa Julio",
    initials: "MJ",
    rating: 5,
    date: "25 nov 2023",
    text: "Excelente, los masajes terapéuticos personalizados de Many me han ayudado muchísimo, no soportaba los dolores y desde el primer masaje he mejorado notablemente.",
    color: "bg-primary",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} estrellas de 5`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-accent text-accent" : "text-border"}`}
        />
      ))}
    </div>
  )
}

export default function TestimoniosSection() {
  const [page, setPage] = useState(0)
  const perPage = 3
  const totalPages = Math.ceil(testimonios.length / perPage)
  const visible = testimonios.slice(page * perPage, page * perPage + perPage)

  return (
    <section id="testimonios" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-xs font-body uppercase tracking-[0.3em] font-medium">
              Testimonios
            </span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground text-balance mb-4">
            Lo que dicen mis clientes
          </h2>

          {/* Google rating summary */}
          <div className="inline-flex items-center gap-3 bg-muted border border-border rounded-full px-6 py-3 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-sans font-bold text-foreground text-lg">5.0</span>
            <span className="text-muted-foreground font-body text-sm">
              32 opiniones de 5 estrellas en Google
            </span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 min-h-[400px]">
          {visible.map((t, idx) => (
            <article
              key={idx}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col hover:shadow-md hover:border-primary/20 transition-all duration-200"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4 shrink-0" />
              <p className="font-body text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                {`"${t.text}"`}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center shrink-0`}
                >
                  <span className="text-white text-xs font-sans font-bold">{t.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body font-semibold text-foreground text-sm truncate">
                    {t.name}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <StarRating rating={t.rating} />
                    <span className="text-muted-foreground text-xs font-body">{t.date}</span>
                  </div>
                </div>
                {/* Google G icon */}
                <div className="shrink-0 w-6 h-6 rounded-full bg-white border border-border flex items-center justify-center">
                  <span className="text-[10px] font-bold text-blue-500">G</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Página anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  i === page ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Ir a página ${i + 1}`}
                aria-current={i === page ? "page" : undefined}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Página siguiente"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* CTA to Google */}
        <div className="text-center mt-8">
          <a
            href="https://maps.google.com/?q=Many+Díaz+Masaje+Terapéutico+Personalizado+Panama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
          >
            Ver las 32 opiniones en Google
          </a>
        </div>
      </div>
    </section>
  )
}
