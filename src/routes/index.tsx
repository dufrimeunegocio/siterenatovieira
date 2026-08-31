import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Identification } from "@/components/site/Identification";
import { Specialties } from "@/components/site/Specialties";
import { About } from "@/components/site/About";
import { Modalities } from "@/components/site/Modalities";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/site/CookieBanner";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

const TITLE = "Dr. Renato Vieira — Psicologia Clínica e Neuropsicologia";
const DESCRIPTION =
  "Psicologia clínica com mais de 22 anos de experiência e mais de 40 mil atendimentos. Atendimento presencial em São Paulo/SP e Cambuí/MG, e on-line.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Psychiatric",
          name: "Centro de Referência em Psicologia Clínica — Dr. Renato Vieira",
          description: DESCRIPTION,
          telephone: "+5535999782150",
          email: "centrodepsicologiarv@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Paulino Camasmie, nº 61 — Jardim Paulista",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Identification />
        <Specialties />
        <About />
        <Modalities />
        <Testimonials />
        <CtaBanner />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </div>
  );
}
