import heroImg from "@/assets/hero.jpeg";
import { STATS, WHATSAPP_URL } from "@/data/site";

export function Hero() {
  return (
    <>
      <section id="inicio" className="bg-primary">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-2 lg:pt-36 lg:pb-28">
          <div>
            <h1 className="font-serif text-[2.25rem] leading-[1.12] font-semibold tracking-[-0.015em] text-primary-foreground sm:text-[2.6rem] lg:text-[2.875rem]">
              Psicologia Clínica com experiência, acolhimento e conhecimento especializado
            </h1>
            <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-primary-foreground/75 sm:text-lg">
              Mais de 22 anos de experiência clínica e mais de 40 mil atendimentos realizados, com
              atendimento presencial e on-line.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-9 px-7 py-3.5"
            >
              Agendar atendimento
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -top-6 -right-4 hidden size-24 rounded-full border border-primary-foreground/20 lg:block" />
            <div className="rounded-[2rem] bg-primary-foreground/5 p-5">
              <img
                src={heroImg}
                alt="Dr. Renato Vieira"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
                width={448}
                height={560}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1240px] px-6 py-16">
          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.value}
                className={`px-4 text-center ${i > 0 ? "lg:border-l lg:border-border" : ""}`}
              >
                <p className="font-serif text-[2.25rem] leading-none font-semibold text-accent">
                  {s.value}
                </p>
                <p className="mt-3 text-[0.7rem] font-medium tracking-[0.12em] text-foreground/70 uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <hr className="mt-16 border-border" />
        </div>
      </section>
    </>
  );
}
