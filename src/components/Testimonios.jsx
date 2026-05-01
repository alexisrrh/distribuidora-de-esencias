const testimonios = [
  {
    nombre: "Cliente frecuente",
    texto:
      "Excelente atención y variedad de sabores. Ideal para comprar por volumen.",
  },
  {
    nombre: "Negocio aliado",
    texto:
      "La presentación por galón facilita mucho el trabajo y el despacho es práctico.",
  },
  {
    nombre: "Comprador al mayor",
    texto:
      "Buena opción para quienes necesitan surtirse rápido y cotizar directo.",
  },
];

export function Testimonios() {
  return (
    <section className="bg-[#f7f3ed] px-5 py-24 text-zinc-950">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-600">
            Opiniones
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-6xl">
            Clientes que confían
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonios.map((item) => (
            <div
              key={item.nombre}
              className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-lg shadow-black/5"
            >
              <div className="mb-5 flex gap-1 text-xl text-orange-500">
                ★★★★★
              </div>

              <p className="text-lg leading-8 text-zinc-700">“{item.texto}”</p>

              <p className="mt-6 font-black text-zinc-950">{item.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}