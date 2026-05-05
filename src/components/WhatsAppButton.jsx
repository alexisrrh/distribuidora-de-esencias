import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/584242462310?text=Hola,%20quiero%20cotizar%20saborizantes%20por%20galón"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/40 transition hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}