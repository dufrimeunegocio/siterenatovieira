import { Activity, Cloud, Users, Stethoscope, Brain, MessageSquare } from "lucide-react";

const ITEMS = [
  {
    icon: Activity,
    title: "Ansiedade",
    text: "Acompanhamento para pessoas que enfrentam ansiedade e seus impactos na rotina, nos relacionamentos e na qualidade de vida.",
  },
  {
    icon: Cloud,
    title: "Depressão",
    text: "Suporte psicológico diante de períodos de tristeza persistente, desânimo e sofrimento emocional.",
  },
  {
    icon: Users,
    title: "Transtornos de Personalidade",
    text: "Acompanhamento especializado para questões relacionadas aos transtornos de personalidade e seus impactos na vida cotidiana.",
  },
  {
    icon: Stethoscope,
    title: "Psicopatologia",
    text: "Especialização em Psicopatologia, com olhar técnico e aprofundado para diferentes manifestações do sofrimento psicológico.",
  },
  {
    icon: Brain,
    title: "Neuropsicologia e Neurodesenvolvimento",
    text: "Atuação especializada em Neuropsicologia, com ênfase em transtornos do neurodesenvolvimento e transtornos neurológicos.",
  },
  {
    icon: MessageSquare,
    title: "Terapia Cognitivo-Comportamental",
    text: "Abordagem baseada na Terapia Cognitivo-Comportamental (TCC), utilizada no acompanhamento de diferentes demandas psicológicas.",
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <span className="eyebrow">Especialidades</span>
        <h2 className="section-title mt-5">Especialidades e áreas de atuação</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/75">
          Um olhar especializado para diferentes necessidades emocionais, psicológicas e
          relacionadas ao comportamento.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-md border border-border bg-card p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_-12px_rgba(30,61,82,0.15)]"
            >
              <div className="flex size-11 items-center justify-center rounded-md bg-muted">
                <Icon className="size-5 text-primary" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 font-sans text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-4 text-sm leading-[1.9] text-foreground/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
