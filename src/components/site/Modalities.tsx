import { MapPin, Video } from "lucide-react";
import {
  ADDRESS_MG_LINE1,
  ADDRESS_MG_LINE2,
  ADDRESS_SP_LINE1,
  ADDRESS_SP_LINE2,
  WHATSAPP_URL,
} from "@/data/site";

export function Modalities() {
  return (
    <section id="atendimento" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <span className="eyebrow">Modalidades</span>
        <h2 className="section-title mt-5 text-primary-foreground">
          Atendimento presencial e on-line
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-md border border-primary-foreground/15 bg-primary-foreground/5 p-8">
            <p className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] text-accent uppercase">
              <MapPin className="size-4" strokeWidth={1.8} />
              Atendimento presencial
            </p>
            <h3 className="mt-5 font-sans text-xl font-semibold text-primary-foreground">
              São Paulo — SP
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/75">
              {ADDRESS_SP_LINE1}
              <br />
              {ADDRESS_SP_LINE2}
            </p>
          </article>

          <article className="rounded-md border border-primary-foreground/15 bg-primary-foreground/5 p-8">
            <p className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] text-accent uppercase">
              <MapPin className="size-4" strokeWidth={1.8} />
              Atendimento presencial
            </p>
            <h3 className="mt-5 font-sans text-xl font-semibold text-primary-foreground">
              Cambuí — MG
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/75">
              {ADDRESS_MG_LINE1}
              <br />
              {ADDRESS_MG_LINE2}
            </p>
          </article>

          <article className="rounded-md border border-primary-foreground/15 bg-primary-foreground/5 p-8 lg:col-span-2">
            <p className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] text-accent uppercase">
              <Video className="size-4" strokeWidth={1.8} />
              Atendimento on-line
            </p>
            <h3 className="mt-5 font-sans text-xl font-semibold text-primary-foreground">
              Atendimento à distância
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-primary-foreground/75">
              Atendimento psicológico on-line para pacientes de diferentes localidades, com a mesma
              qualidade e cuidado do acompanhamento profissional.
            </p>
          </article>
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-7 py-3.5"
          >
            Quero agendar um atendimento
          </a>
        </div>
      </div>
    </section>
  );
}
