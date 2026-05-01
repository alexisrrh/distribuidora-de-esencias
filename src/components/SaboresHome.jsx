import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "./ProductCard";

import vainillaNegra from "../assets/sabores/vainilla-negra.png";
import chocolate from "../assets/sabores/chocolate.png";
import coco from "../assets/sabores/coco.png";
import mantecado from "../assets/sabores/mantecado.png";

const topSabores = [
  { nombre: "Vainilla Negra", img: vainillaNegra },
  { nombre: "Chocolate", img: chocolate },
  { nombre: "Coco", img: coco },
  { nombre: "Mantecado", img: mantecado },
];

export function SaboresHome() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ed] px-5 py-24 text-zinc-950">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-600">
            Más solicitados
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            Sabores destacados
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Una selección de los sabores más pedidos para negocios, producción y
            clientes frecuentes.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {topSabores.map((sabor, index) => (
            <ProductCard
              key={sabor.nombre}
              sabor={sabor}
              index={index}
              destacado
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/catalogo"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-zinc-950 px-8 py-4 text-lg font-black text-white shadow-xl shadow-black/20 transition hover:scale-105 hover:bg-orange-600"
          >
            Ver catálogo completo
            <ArrowRight size={22} />
          </Link>
        </div>
      </div>
    </section>
  );
}