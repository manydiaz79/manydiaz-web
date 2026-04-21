"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import QuienSoySection from "@/components/quien-soy-section"
import ProductosSection from "@/components/productos-section"
import TestimoniosSection from "@/components/testimonios-section"
import ContactoSection from "@/components/contacto-section"
import Footer from "@/components/footer"

export default function Page() {
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "quien-soy", "productos", "testimonios", "contacto"]
      const scrollPos = window.scrollY + 100

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const bottom = top + el.offsetHeight
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <QuienSoySection />
      <ProductosSection />
      <TestimoniosSection />
      <ContactoSection />
      <Footer />
    </main>
  )
}
