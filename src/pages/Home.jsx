import { Hero } from "../components/Hero";
import { Impacto } from "../components/Impacto";
import { SaboresHome } from "../components/SaboresHome";
import { Promocion } from "../components/Promocion";
import { Beneficios } from "../components/Beneficios";
import { Confianza } from "../components/Confianza";
import { ComoComprar } from "../components/ComoComprar";
import { Testimonios } from "../components/Testimonios";
import { FAQ } from "../components/FAQ";
import { Contacto } from "../components/Contacto";

export function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080808] text-white">
      <Hero />

      <section className="relative z-10">
        <Impacto />
      </section>

      <section className="relative z-10">
        <SaboresHome />
      </section>

      <section className="relative z-10">
        <Promocion />
      </section>

      <section className="relative z-10">
        <Beneficios />
      </section>

      <section className="relative z-10">
        <Confianza />
      </section>

      <section className="relative z-10">
        <ComoComprar />
      </section>

      <section className="relative z-10">
        <Testimonios />
      </section>

      <section className="relative z-10">
        <FAQ />
      </section>

      <section className="relative z-10">
        <Contacto />
      </section>
    </main>
  );
}