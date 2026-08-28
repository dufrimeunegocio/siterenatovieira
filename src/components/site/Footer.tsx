import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { ADDRESS, EMAIL, INSTAGRAM, NAV_LINKS, PHONE_LABEL, WHATSAPP_URL } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1240px] px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <p className="font-serif text-xl font-semibold">
              Centro de Referência em Psicologia Clínica
            </p>
            <p className="mt-2 text-sm text-accent">Dr. Renato Vieira</p>
            <hr className="my-6 w-12 border-primary-foreground/30" />
            <p className="max-w-sm text-sm leading-[1.9] text-primary-foreground/70">
              Atendimento presencial e on-line. São Paulo/SP e Cambuí/MG. Psicologia clínica com
              experiência, acolhimento e conhecimento especializado.
            </p>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-accent uppercase">
              Navegação
            </p>
            <ul className="mt-6 space-y-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-accent uppercase">
              Contato
            </p>
            <ul className="mt-6 space-y-4 text-sm text-primary-foreground/80">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Phone className="size-4 text-accent" strokeWidth={1.8} />
                  {PHONE_LABEL}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3">
                  <Mail className="size-4 text-accent" strokeWidth={1.8} />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Instagram className="size-4 text-accent" strokeWidth={1.8} />
                  @centrodepsicologiarv
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.8} />
                {ADDRESS}
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-primary-foreground/15" />

        <div className="flex flex-col gap-4 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Centro de Referência em Psicologia Clínica. CNPJ 43.236.901/0001-90. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="/politica-de-privacidade" className="hover:text-primary-foreground">
              Política de Privacidade
            </a>
            <a href="/politica-de-cookies" className="hover:text-primary-foreground">
              Política de Cookies
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-primary-foreground/50">
          Desenvolvido com ❤️ por{" "}
          <a
            href="https://www.instagram.com/dufrimeunegocio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            @Dufrimeunegocio
          </a>
        </p>
      </div>
    </footer>
  );
}
