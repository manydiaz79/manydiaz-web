"use client"

import { useState } from "react"
import { Phone, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react"

export default function ContactoSection() {
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Hola Andy! 👋 Soy ${form.nombre}${form.telefono ? `, mi teléfono es ${form.telefono}` : ""}. ${form.mensaje}`
    )
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      window.open(`https://wa.me/50766909417?text=${msg}`, "_blank")
    }, 600)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Teléfono / WhatsApp",
      value: "6690-9417",
      href: "tel:66909417",
    },
    {
      icon: MapPin,
      label: "Dirección",
      value: "C. 59 Este, Panamá, Provincia de Panamá",
      href: "https://maps.google.com/?q=C.+59+Este+Panama",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Escríbenos al instante",
      href: "https://wa.me/50766909417",
    },
  ]

  return (
    <section id="contacto" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary text-xs font-body uppercase tracking-[0.3em] font-medium">
              Contacto
            </span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground text-balance mb-4">
            Reserva tu sesión hoy
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto leading-relaxed">
            Estoy listo para atenderte. Escríbeme por WhatsApp o llena el formulario y me
            pongo en contacto contigo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div>
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-body uppercase tracking-wide text-muted-foreground mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-body font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/50766909417?text=Hola%20Andy!%20Quiero%20reservar%20una%20sesi%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-body font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-green-500/20"
            >
              <MessageCircle className="w-5 h-5" />
              Escribir por WhatsApp
            </a>

            {/* Map placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-sm">
              <img
                src="https://placehold.co/600x240?text=Mapa+de+ubicacion+C.+59+Este+Panama+Provincia+de+Panama+zona+verde+calles+urbanas"
                alt="Mapa de la ubicación de Andy Díaz en C. 59 Este, Panamá"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <CheckCircle className="w-16 h-16 text-primary" />
                <h3 className="text-2xl font-sans font-bold text-foreground">
                  Mensaje enviado
                </h3>
                <p className="font-body text-muted-foreground">
                  Andy recibió tu mensaje por WhatsApp y se pondrá en contacto contigo
                  pronto.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ nombre: "", telefono: "", mensaje: "" }) }}
                  className="mt-2 text-primary font-body text-sm underline underline-offset-4"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-sans font-bold text-foreground mb-2">
                  Enviar mensaje
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-6">
                  Completa el formulario y te responderemos via WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-xs font-body font-medium text-foreground uppercase tracking-wide mb-1.5"
                    >
                      Tu nombre *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="¿Cómo te llamas?"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm font-body bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-xs font-body font-medium text-foreground uppercase tracking-wide mb-1.5"
                    >
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="Tu número de contacto"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm font-body bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-xs font-body font-medium text-foreground uppercase tracking-wide mb-1.5"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={4}
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="¿En qué puedo ayudarte? ¿Quieres reservar una sesión o conocer mis programas?"
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm font-body bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-full font-body font-semibold text-sm tracking-wide hover:opacity-90 disabled:opacity-60 transition-all duration-200"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {loading ? "Enviando..." : "Enviar por WhatsApp"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
