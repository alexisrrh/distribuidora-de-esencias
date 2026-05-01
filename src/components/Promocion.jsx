import { Gift, MessageCircle, CheckCircle2 } from "lucide-react";

export function Promocion() {
  return (
    <section id="promocion" className="bg-[#080808] px-5 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] border border-orange-500/25 bg-gradient-to-br from-zinc-950 via-black to-red-950 shadow-2xl shadow-orange-500/10">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-8 lg:p-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-orange-400">
                <Gift size={18} />
                Promo por volumen
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
                Compra{" "}
                <span className="text-orange-400">4 galones</span> del mismo
                sabor y recibe{" "}
                <span className="text-yellow-300">1 galón gratis</span>.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Promoción ideal para negocios, distribuidores y clientes que
                compran por cantidad. La disponibilidad se confirma directamente
                por WhatsApp.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Aplica por sabor seleccionado",
                  "Presentación de 1 galón",
                  "Consulta disponibilidad antes de comprar",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-orange-400" size={22} />
                    <p className="font-bold text-zinc-200">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/584242462330?text=Hola,%20quiero%20consultar%20la%20promoción%20de%204%20galones%20más%201%20gratis"
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 text-lg font-black text-white shadow-xl shadow-orange-500/25 transition hover:scale-[1.03]"
              >
                <MessageCircle size={22} />
                Consultar promoción
              </a>
            </div>

            <div className="relative flex items-center justify-center bg-white/[0.04] p-8 lg:p-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f9731630,transparent_45%)]" />

              <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-black/50 p-7 text-center backdrop-blur-xl">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">
                  Ejemplo claro
                </p>

                <div className="mt-7 grid grid-cols-5 gap-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="flex aspect-square items-center justify-center rounded-2xl bg-white text-3xl font-black text-zinc-950"
                    >
                      {item}
                    </div>
                  ))}

                  <div className="flex aspect-square items-center justify-center rounded-2xl bg-yellow-300 text-3xl font-black text-zinc-950 shadow-xl shadow-yellow-300/20">
                    +1
                  </div>
                </div>

                <p className="mt-6 text-2xl font-black">
                  4 pagados + 1 de regalo
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Ejemplo: compras 4 galones de vainilla y recibes 1 galón
                  adicional de vainilla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}