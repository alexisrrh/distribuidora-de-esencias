import { MessageCircle } from "lucide-react";

export function Contacto() {
  return (
    <section className="bg-gradient-to-br from-orange-600 to-red-700 px-5 py-20 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-black sm:text-5xl">
          ¿Quieres cotizar tu pedido?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
          Escríbenos por WhatsApp, consulta sabores disponibles y coordina tu
          despacho en Caracas o La Guaira.
        </p>

        <a
          href="https://wa.me/584242462330?text=Hola,%20quiero%20cotizar%20saborizantes%20por%20galón"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-black text-red-700 transition hover:scale-105"
        >
          <MessageCircle size={24} />
          Pedir por WhatsApp
        </a>
      </div>
    </section>
  );
}