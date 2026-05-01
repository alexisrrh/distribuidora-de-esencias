import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Truck,
  BadgeCheck,
  CreditCard,
  Gift,
} from "lucide-react";
import { Link } from "react-router-dom";
import galones from "../assets/galones.jpeg";

const beneficios = [
  { icon: Truck, title: "Envíos", text: "Despacho local y envíos nacionales" },
  { icon: CreditCard, title: "Crédito", text: "Hasta 1 mes según acuerdo" },
  { icon: BadgeCheck, title: "Ventas", text: "Mayor y detal" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#070707] px-5 pb-16 pt-8 text-white sm:pt-10 lg:pb-24 lg:pt-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#f9731635,transparent_35%),radial-gradient(circle_at_80%_60%,#dc262635,transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-orange-400 sm:px-5 sm:text-xs sm:tracking-[0.3em]">
            <Gift size={15} />
            Promo 4 + 1 disponible
          </span>

          <h1 className="mt-5 text-4xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
            Esencias concentradas por galón para{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              negocios en Venezuela.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8 lg:mx-0">
            Venta al mayor y detal de saborizantes tipo 5. Cotiza por WhatsApp,
            elige tus sabores y coordina despacho local o envío nacional.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/catalogo"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 px-7 py-4 text-base font-black text-white shadow-2xl shadow-orange-500/25 transition hover:scale-[1.03] sm:text-lg"
            >
              Ver catálogo
              <ArrowRight size={21} />
            </Link>

            <a
              href="https://wa.me/584242462330?text=Hola,%20quiero%20cotizar%20saborizantes%20por%20galón"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-base font-black text-white backdrop-blur transition hover:bg-white/15 sm:text-lg"
            >
              <MessageCircle size={21} />
              Cotizar ahora
            </a>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {beneficios.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-4 text-left shadow-xl shadow-black/20 backdrop-blur"
                >
                  <Icon className="mb-3 text-orange-400" size={25} />
                  <h3 className="font-black">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative -mt-2 sm:mt-0 lg:-mt-2"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-orange-500/20 blur-3xl lg:rounded-[3rem]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-black/40 sm:p-3 lg:rounded-[3rem]">
            <img
              src={galones}
              alt="Galones Famfighad"
              className="h-[320px] w-full rounded-[1.5rem] object-cover object-center sm:h-[420px] lg:h-[520px] lg:rounded-[2.4rem]"
            />

            <motion.div
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 0 0 rgba(249,115,22,0)",
                  "0 0 38px rgba(249,115,22,0.5)",
                  "0 0 0 rgba(249,115,22,0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 left-4 right-4 rounded-2xl border border-orange-500/40 bg-black/85 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-[2rem] sm:p-5"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-400 sm:text-xs sm:tracking-[0.3em]">
                Oferta por volumen
              </p>

              <motion.h3
                animate={{ opacity: [1, 0.82, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mt-2 text-base font-black leading-snug sm:text-2xl"
              >
                Compra 4 galones por sabor y recibe 1 de regalo.
              </motion.h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}