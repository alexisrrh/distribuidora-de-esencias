import { Link, NavLink } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Famfighad"
            className="h-20 w-70 rounded-2xl bg-white object-contain p-1"
          />

        
        </Link>

        {/* LINKS */}
        <div className="hidden items-center gap-8 lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-bold ${
                isActive ? "text-orange-400" : "text-zinc-300 hover:text-orange-400"
              }`
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/catalogo"
            className={({ isActive }) =>
              `text-sm font-bold ${
                isActive ? "text-orange-400" : "text-zinc-300 hover:text-orange-400"
              }`
            }
          >
            Sabores
          </NavLink>

          <a href="/#promocion" className="text-sm font-bold text-zinc-300 hover:text-orange-400">
            Promoción
          </a>

          <a href="/#comprar" className="text-sm font-bold text-zinc-300 hover:text-orange-400">
            Cómo comprar
          </a>
        </div>

        {/* BOTÓN WHATSAPP */}
        <a
          href="https://wa.me/584242462330?text=Hola,%20quiero%20cotizar%20saborizantes"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 text-sm font-black text-white shadow-lg hover:scale-105 sm:inline-flex"
        >
          <MessageCircle size={18} />
          Cotizar
        </a>
      </nav>
    </header>
  );
}