import { BadgeCheck, MapPin, PackageCheck, PhoneCall } from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "Marca registrada",
    text: "Famfighad C.A cuenta con productos identificados y etiquetados.",
  },
  {
    icon: PackageCheck,
    title: "Presentación por galón",
    text: "Formato ideal para negocios, producción y compras por volumen.",
  },
  {
    icon: MapPin,
    title: "Despacho local",
    text: "Entregas disponibles en Caracas y La Guaira.",
  },
  {
    icon: PhoneCall,
    title: "Atención directa",
    text: "Cotización y pedidos por WhatsApp sin complicaciones.",
  },
];

export function Confianza() {
  return (
    <section className="bg-white px-5 py-24 text-zinc-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-600">
              Confianza
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              Productos pensados para negocios que necesitan calidad y rapidez.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Famfighad C.A ofrece esencias concentradas en presentación de
              galón, con atención directa, despacho y opciones para compras al
              mayor y detal.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-zinc-200 bg-[#f7f3ed] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}