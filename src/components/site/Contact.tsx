import { Phone, Mail, Instagram, Navigation, MapPin } from "lucide-react";
import {
  ADDRESS_MG_LINE1,
  ADDRESS_MG_LINE2,
  ADDRESS_SP_LINE1,
  ADDRESS_SP_LINE2,
  EMAIL,
  INSTAGRAM,
  PHONE_LABEL,
  WHATSAPP_URL,
} from "@/data/site";

export function Contact() {
  return (
    <section id="contato" className="bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <span className="eyebrow">Contato</span>
        <h2 className="section-title mt-5">Vamos conversar?</h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/75">
          Entre em contato para agendar um atendimento ou esclarecer suas dúvidas. O retorno é feito
          com atenção e cuidado.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <ul className="space-y-6">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <span className="flex size-11 items-center justify-center rounded-full border border-border bg-card">
                  <Phone className="size-4 text-accent" strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-[0.68rem] font-semibold tracking-[0.16em] text-foreground/60 uppercase">
                    WhatsApp
                  </span>
                  <span className="text-base text-primary">{PHONE_LABEL}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-full border border-border bg-card">
                  <Mail className="size-4 text-accent" strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-[0.68rem] font-semibold tracking-[0.16em] text-foreground/60 uppercase">
                    E-mail
                  </span>
                  <span className="text-base text-primary">{EMAIL}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <span className="flex size-11 items-center justify-center rounded-full border border-border bg-card">
                  <Instagram className="size-4 text-accent" strokeWidth={1.8} />
                </span>
                <span>
                  <span className="block text-[0.68rem] font-semibold tracking-[0.16em] text-foreground/60 uppercase">
                    Instagram
                  </span>
                  <span className="text-base text-primary">@centrodepsicologiarv</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex size-11 items-center justify-center rounded-full border border-border bg-card">
                <Navigation className="size-4 text-accent" strokeWidth={1.8} />
              </span>
              <span>
                <span className="block text-[0.68rem] font-semibold tracking-[0.16em] text-foreground/60 uppercase">
                  Atuação
                </span>
                <span className="text-base text-primary">São Paulo/SP e Cambuí/MG</span>
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex size-11 items-center justify-center rounded-full border border-border bg-card">
                <MapPin className="size-4 text-accent" strokeWidth={1.8} />
              </span>
              <span>
                <span className="block text-[0.68rem] font-semibold tracking-[0.16em] text-foreground/60 uppercase">
                  Endereço presencial — São Paulo
                </span>
                <span className="text-base text-primary">
                  {ADDRESS_SP_LINE1}
                  <br />
                  {ADDRESS_SP_LINE2}
                </span>
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex size-11 items-center justify-center rounded-full border border-border bg-card">
                <MapPin className="size-4 text-accent" strokeWidth={1.8} />
              </span>
              <span>
                <span className="block text-[0.68rem] font-semibold tracking-[0.16em] text-foreground/60 uppercase">
                  Endereço presencial — Cambuí
                </span>
                <span className="text-base text-primary">
                  {ADDRESS_MG_LINE1}
                  <br />
                  {ADDRESS_MG_LINE2}
                </span>
              </span>
            </li>
            <li className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy px-7 py-3.5"
              >
                Agendar atendimento pelo WhatsApp
              </a>
            </li>
          </ul>

          <div className="min-h-[380px] overflow-hidden rounded-md border border-border">
            <iframe
              title="Mapa - Rua Paulino Camasmie, nº 61, Jardim Paulista, São Paulo/SP"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6720%2C-23.5760%2C-46.6600%2C-23.5680&layer=mapnik&marker=-23.5720%2C-46.6660"
              className="h-full min-h-[380px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
