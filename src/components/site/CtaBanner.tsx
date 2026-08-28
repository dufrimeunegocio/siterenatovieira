import { WHATSAPP_URL } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 text-center">
        <span className="eyebrow eyebrow-center">Acompanhamento psicológico</span>
        <h2 className="section-title mt-6 text-primary-foreground">
          Está buscando acompanhamento psicológico?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
          Entre em contato para conhecer as possibilidades de atendimento e esclarecer suas dúvidas.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-9 px-7 py-3.5"
        >
          Falar com o Dr. Renato pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
