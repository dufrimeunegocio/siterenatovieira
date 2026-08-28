import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  const decide = (value: string) => {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 rounded-md border border-border bg-card p-5 shadow-[0_10px_40px_-15px_rgba(30,61,82,0.35)] md:inset-x-6">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-foreground/80">
          Utilizamos cookies para melhorar sua experiência e analisar a navegação. Ao continuar,
          você concorda com nossa{" "}
          <a href="/politica-de-cookies" className="font-medium text-primary underline">
            Política de Cookies
          </a>{" "}
          e{" "}
          <a href="/politica-de-privacidade" className="font-medium text-primary underline">
            Política de Privacidade
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground/80"
          >
            Recusar
          </button>
          <button type="button" onClick={() => decide("accepted")} className="btn-navy px-6">
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
