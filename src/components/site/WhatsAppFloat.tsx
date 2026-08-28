import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex size-12 items-center justify-center rounded-full bg-accent text-primary shadow-[0_8px_24px_-8px_rgba(30,61,82,0.5)] transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" strokeWidth={1.8} />
    </a>
  );
}
