import { MessageCircle, MapPin, PackageCheck } from "lucide-react";
import logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Famfighad C.A"
              className="h-14 w-14 rounded-2xl bg-white object-contain p-1"
            />

            <div>
              <h3 className="text-2xl font-black">Famfighad C.A</h3>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                Tu sabor indicado
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-xl leading-7 text-zinc-400">
            Esencias concentradas tipo 5 en presentación de galón. Ventas al
            mayor y detal, con despacho local y envíos a nivel nacional.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-black">Enlaces</h4>

          <div className="mt-4 grid gap-3 text-zinc-400">
            <a href="#" className="hover:text-orange-400">Inicio</a>
            <a href="#sabores" className="hover:text-orange-400">Sabores</a>
            <a href="#promocion" className="hover:text-orange-400">Promoción</a>
            <a href="#comprar" className="hover:text-orange-400">Cómo comprar</a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-black">Contacto</h4>

          <div className="mt-4 grid gap-3 text-zinc-400">
            <p className="flex gap-2">
              <MapPin className="mt-1 shrink-0 text-orange-400" size={18} />
              Caracas, La Guaira y envíos nacionales
            </p>

            <p className="flex gap-2">
              <PackageCheck className="mt-1 shrink-0 text-orange-400" size={18} />
              Mayor y detal
            </p>

            <a
              href="https://wa.me/584242462330?text=Hola,%20quiero%20cotizar%20saborizantes%20por%20galón"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 font-black text-white transition hover:scale-105"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Famfighad C.A. Todos los derechos reservados.</p>
        <p>Esencias tipo 5 · Presentación por galón</p>
      </div>
    </footer>
  );
}