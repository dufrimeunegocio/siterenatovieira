import { IDENTIFICATION } from "@/data/site";

export function Identification() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <span className="eyebrow">Identificação</span>
        <h2 className="section-title mt-5">Talvez você esteja passando por isso</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/75">
          Alguns momentos da vida podem trazer sofrimento, insegurança, mudanças e dificuldades que
          nem sempre conseguimos enfrentar sozinhos.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {IDENTIFICATION.map((item) => (
            <article
              key={item.title}
              className="rounded-md border border-border bg-card p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_-12px_rgba(30,61,82,0.15)]"
            >
              <h3 className="font-sans text-base font-semibold text-primary">{item.title}</h3>
              <p className="mt-4 text-sm leading-[1.9] text-foreground/70">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
