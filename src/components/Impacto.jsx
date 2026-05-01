const stats = [
  {
    number: "18+",
    label: "Sabores disponibles",
  },
  {
    number: "1 Galón",
    label: "Presentación principal",
  },
  
   {
  number: "Venezuela",
  label: "Envíos a nivel nacional",
},
  {
    number: "4 + 1",
    label: "Promoción por volumen",
  },
];

export function Impacto() {
  return (
    <section className="bg-[#080808] px-5 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 text-center shadow-xl shadow-black/20"
          >
            <p className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-4xl font-black text-transparent">
              {item.number}
            </p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}