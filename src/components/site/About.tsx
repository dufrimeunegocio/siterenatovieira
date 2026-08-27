import sobreImg from "@/assets/sobre.png";

const FORMATION = [
  "Graduado em Psicologia Clínica",
  "Pós-Graduado em Neuropsicologia",
  "Especialista em Psicopatologia pela USP",
  "Psicólogo Perito em Avaliação do Comportamento",
];

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -top-5 -left-3 hidden h-24 w-24 border-t-2 border-l-2 border-accent lg:block" />
          <div className="relative">
            <img
              src={sobreImg}
              alt="Dr. Renato Vieira"
              className="relative z-10 w-full rounded-sm object-cover"
              width={456}
              height={570}
            />
            <div className="absolute -right-4 -bottom-4 hidden h-full w-full rounded-sm border border-primary/60 lg:block" />
          </div>
        </div>

        <div>
          <span className="eyebrow">Sobre o profissional</span>
          <h2 className="section-title mt-5">
            Experiência que acolhe.
            <br />
            Conhecimento que transforma.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/75">
            <p>
              O Centro de Referência em Psicologia Clínica atua na área de Psicologia Clínica,
              oferecendo atendimento presencial e on-line para adultos e idosos, com atuação em São
              Paulo/SP e Cambuí/MG.
            </p>
            <p>
              O trabalho é baseado em experiência clínica, especialização, qualidade no atendimento
              e utilização da Terapia Cognitivo-Comportamental (TCC).
            </p>
            <p>
              São 19 anos de experiência na área clínica psicológica e mais de 40 mil atendimentos
              realizados.
            </p>
          </div>

          <div className="mt-8 rounded-md bg-accent p-7">
            <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-primary uppercase">
              Formação e especialização
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {FORMATION.map((f) => (
                <li key={f} className="flex gap-2 text-sm leading-relaxed text-primary">
                  <span aria-hidden="true">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
