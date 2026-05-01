import { useState } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "./ProductCard";

import vainillaNegra from "../assets/sabores/vainilla-negra.png";
import vainillaBlanca from "../assets/sabores/vainilla-blanca.png";
import mantecado from "../assets/sabores/mantecado.png";
import mantequilla from "../assets/sabores/mantequilla.png";
import nata from "../assets/sabores/nata.png";
import coco from "../assets/sabores/coco.png";
import chocolate from "../assets/sabores/chocolate.png";
import banano from "../assets/sabores/banano.png";
import anis from "../assets/sabores/anis.png";
import limon from "../assets/sabores/limon.png";
import panetone from "../assets/sabores/panetone.png";
import pina from "../assets/sabores/pina.png";
import ronPasa from "../assets/sabores/ron-pasa.png";
import ronJamaica from "../assets/sabores/ron-jamaica.png";
import queso from "../assets/sabores/queso.png";
import naranja from "../assets/sabores/naranja.png";
import canela from "../assets/sabores/canela.png";
import caramelina from "../assets/sabores/caramelina.png";

const sabores = [
  { nombre: "Vainilla Negra", img: vainillaNegra },
  { nombre: "Vainilla Blanca", img: vainillaBlanca },
  { nombre: "Mantecado", img: mantecado },
  { nombre: "Mantequilla", img: mantequilla },
  { nombre: "Nata", img: nata },
  { nombre: "Coco", img: coco },
  { nombre: "Chocolate", img: chocolate },
  { nombre: "Banano", img: banano },
  { nombre: "Anís", img: anis },
  { nombre: "Limón", img: limon },
  { nombre: "Panetone", img: panetone },
  { nombre: "Piña", img: pina },
  { nombre: "Ron Pasa", img: ronPasa },
  { nombre: "Ron Jamaica", img: ronJamaica },
  { nombre: "Queso", img: queso },
  { nombre: "Naranja", img: naranja },
  { nombre: "Canela", img: canela },
  { nombre: "Caramelina", img: caramelina },
];

export function Sabores() {
  const [busqueda, setBusqueda] = useState("");

  const filtrados = sabores.filter((sabor) =>
    sabor.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section id="sabores" className="relative overflow-hidden bg-[#f7f3ed] px-5 py-24 text-zinc-950">
      <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-600">
            Catálogo completo
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            Todos los sabores
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Consulta disponibilidad, precios y cantidades directamente por
            WhatsApp.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-4 shadow-xl shadow-black/5">
            <Search className="text-orange-600" size={22} />
            <input
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar sabor..."
              className="w-full bg-transparent text-base font-bold outline-none placeholder:text-zinc-400"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtrados.map((sabor, index) => (
            <ProductCard key={sabor.nombre} sabor={sabor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}