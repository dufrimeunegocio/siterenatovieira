import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/data/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="text-center">
          <span className="eyebrow eyebrow-center">Dúvidas</span>
          <h2 className="section-title mt-6">Dúvidas? Perguntas frequentes.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/75">
            Reunimos as principais dúvidas sobre o atendimento. Caso sua pergunta não esteja aqui,
            entre em contato.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={`text-base font-medium ${isOpen ? "text-accent" : "text-primary"}`}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-primary/60 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-6 text-sm leading-[1.9] text-foreground/75">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
