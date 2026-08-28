import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w < 768 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - perView);
  const current = Math.min(index, maxIndex);

  return (
    <section id="depoimentos" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Depoimentos</span>
            <h2 className="section-title mt-5">O que pacientes e familiares dizem</h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Depoimento anterior"
              onClick={() => setIndex(Math.max(0, current - 1))}
              className="flex size-10 items-center justify-center rounded-md border border-border text-primary transition-colors hover:border-primary/40"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Próximo depoimento"
              onClick={() => setIndex(Math.min(maxIndex, current + 1))}
              className="flex size-10 items-center justify-center rounded-md border border-border text-primary transition-colors hover:border-primary/40"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * (100 / perView)}%)` }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.author}
                className="shrink-0 px-3"
                style={{ width: `${100 / perView}%` }}
              >
                <article className="flex h-full flex-col rounded-md border border-border bg-card p-8">
                  <span className="font-serif text-4xl leading-none text-accent">“</span>
                  <p className="mt-4 flex-1 text-sm leading-[1.9] whitespace-pre-line text-foreground/75">
                    {t.text}
                  </p>
                  <hr className="my-6 border-border" />
                  <p className="text-sm font-semibold text-primary">{t.author}</p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.author}
              type="button"
              aria-label={`Ir para depoimento ${i + 1}`}
              onClick={() => setIndex(Math.min(i, maxIndex))}
              className={`h-1 w-8 rounded-full transition-colors ${
                i === current ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
