import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TechSection } from "@/components/TechSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "João Gerhard — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfólio de João Gerhard, desenvolvedor full-stack especializado em Python, FastAPI, Next.js e PostgreSQL. APIs robustas e aplicações web modernas.",
      },
      { property: "og:title", content: "João Gerhard — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Desenvolvedor focado em criar sistemas escaláveis, APIs robustas e aplicações web modernas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechSection />
      </main>
      <Footer />
    </>
  );
}
