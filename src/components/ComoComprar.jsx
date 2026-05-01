import { MessageCircle, PackageSearch, Truck } from "lucide-react";

const pasos = [
  {
    icon: PackageSearch,
    title: "Elige tus sabores",
    text: "Revisa el catálogo y selecciona los saborizantes que necesitas.",
  },
  {
    icon: MessageCircle,
    title: "Cotiza por WhatsApp",
    text: "Escríbenos para confirmar disponibilidad, cantidades y precio.",
  },
  {
    icon: Truck,
    title: "Recibe tu pedido",
    text: "Coordinamos el despacho en Caracas o La Guaira.",
  },
];

export function ComoComprar() {
  return (
<section id="comprar" className="bg-zinc-950 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">
            Proceso
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            ¿Cómo comprar?
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            Hacer tu pedido es rápido, directo y sin complicaciones.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pasos.map((paso, index) => {
            const Icon = paso.icon;

            return (
              <div
                key={paso.title}
                className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8"
              >
                <span className="absolute right-6 top-5 text-6xl font-black text-white/5">
                  0{index + 1}
                </span>

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-black">{paso.title}</h3>
                <p className="mt-3 text-zinc-400">{paso.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}