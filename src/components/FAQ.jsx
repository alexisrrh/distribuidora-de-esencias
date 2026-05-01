const preguntas = [
  {
    pregunta: "¿Venden al mayor y detal?",
    respuesta:
      "Sí, trabajamos ventas al mayor y detal en presentación de galón.",
  },
  {
    pregunta: "¿Tienen envíos a nivel nacional?",
    respuesta:
      "Sí, ofrecemos despacho local y envíos a nivel nacional mediante coordinación por WhatsApp.",
  },
  {
    pregunta: "¿Los precios aparecen en la web?",
    respuesta:
      "Los precios se cotizan directamente por WhatsApp según sabor, cantidad y disponibilidad.",
  },
  {
    pregunta: "¿Tienen promoción por volumen?",
    respuesta:
      "Sí, por la compra de 4 galones por sabor puedes recibir 1 galón de regalo, según condiciones disponibles.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white px-5 py-24 text-zinc-950">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-600">
            Dudas frecuentes
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-6xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="mt-12 grid gap-5">
          {preguntas.map((item) => (
            <div
              key={item.pregunta}
              className="rounded-[2rem] border border-zinc-200 bg-[#f7f3ed] p-6"
            >
              <h3 className="text-xl font-black">{item.pregunta}</h3>
              <p className="mt-3 leading-7 text-zinc-600">{item.respuesta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}