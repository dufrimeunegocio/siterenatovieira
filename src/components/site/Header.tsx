import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoBranca from "@/assets/logo-branca.png";
import logoAzul from "@/assets/logo-azul.png";
import { NAV_LINKS, WHATSAPP_URL } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-background shadow-[0_1px_20px_-10px_rgba(30,61,82,0.35)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-6">
        <a href="#inicio" aria-label="Centro de Referência em Psicologia Clínica">
          <img
            src={scrolled || open ? logoAzul : logoBranca}
            alt="Centro de Referência em Psicologia Clínica"
            className="h-12 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-primary/85 hover:text-primary"
                  : "text-primary-foreground/85 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden px-5 py-2.5 sm:inline-flex"
          >
            Agendar atendimento
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden ${scrolled || open ? "text-primary" : "text-primary-foreground"}`}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-primary/85"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full"
              >
                Agendar atendimento
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
