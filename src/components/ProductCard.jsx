import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";

export function ProductCard({ sabor, index = 0, destacado = false }) {
  const whatsappText = `Hola, quiero cotizar el sabor ${sabor.nombre}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-red-500/20 blur-3xl" />
      </div>

      <div className="relative overflow-hidden bg-[#f3eee7]">
        <img
          src={sabor.img}
          alt={`Galón de esencia sabor ${sabor.nombre}`}
          className="h-100 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-black/80 px-4 py-2 text-xs font-black uppercase tracking-wide text-white backdrop-blur">
          1 Galón
        </span>

        {destacado && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-orange-500 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
            <Sparkles size={14} />
            Top
          </span>
        )}
      </div>

      <div className="relative p-6">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-600">
          Esencia tipo 5
        </p>

        <h3 className="mt-2 text-2xl font-black text-zinc-950">
          {sabor.nombre}
        </h3>

        <p className="mt-3 min-h-[52px] text-sm leading-6 text-zinc-600">
          Esencia concentrada de alto rendimiento para uso comercial, ideal para
          ventas al mayor y detal.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 text-xs font-bold text-zinc-600">
          <div className="rounded-2xl bg-zinc-100 px-3 py-2 text-center">
            Mayor
          </div>
          <div className="rounded-2xl bg-zinc-100 px-3 py-2 text-center">
            Detal
          </div>
        </div>

        <a
          href={`https://wa.me/584242462330?text=${encodeURIComponent(
            whatsappText
          )}`}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 px-5 py-4 font-black text-white shadow-lg shadow-orange-500/25 transition duration-300 hover:scale-[1.03] hover:shadow-orange-500/40"
        >
          <MessageCircle size={20} />
          Cotizar por WhatsApp
        </a>

        <p className="mt-3 text-center text-xs font-semibold text-zinc-400">
          Respuesta rápida · Cotización directa
        </p>
      </div>
    </motion.article>
  );
}