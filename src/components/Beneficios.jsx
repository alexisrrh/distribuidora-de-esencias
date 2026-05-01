import { Gift, MapPin, PackageCheck, WalletCards } from "lucide-react";

const beneficios = [
  {
    icon: PackageCheck,
    title: "Mayor y detal",
    text: "Ventas por galón para negocios y clientes particulares.",
  },
{
  icon: MapPin,
  title: "Despacho y envíos",
  text: "Despacho en Caracas y La Guaira + envíos a nivel nacional.",
},
  {
    icon: WalletCards,
    title: "Crédito",
    text: "Facilidad de crédito de hasta 1 mes según acuerdo.",
  },
  {
    icon: Gift,
    title: "Promoción",
    text: "A partir de 4 galones por sabor, recibe 1 galón de regalo.",
  },
];

export function Beneficios() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">
            Ventajas
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Compra fácil, rápido y con beneficios
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-zinc-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}