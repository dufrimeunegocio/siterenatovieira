import { Phone, Mail, Instagram, Navigation, MapPin } from "lucide-react";
import { ADDRESS, EMAIL, INSTAGRAM, PHONE_LABEL, WHATSAPP_URL } from "@/data/site";

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
                  Endereço presencial
                </span>
                <span className="text-base text-primary">{ADDRESS}</span>
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
              title="Mapa - Rua Padre Caramuru, nº 875, Cambuí-MG"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-46.0700%2C-22.6180%2C-46.0500%2C-22.6020&layer=mapnik&marker=-22.6100%2C-46.0600"
              className="h-full min-h-[380px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
