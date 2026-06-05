import { Server, Layers, Zap, Database, Globe } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Desenvolvimento Backend",
    description: "Arquitetura de APIs RESTful performantes com Python e FastAPI, foco em código limpo e escalável.",
  },
  {
    icon: Layers,
    title: "Arquitetura de Sistemas",
    description: "Design de sistemas modulares e desacoplados, prontos para crescer com o negócio.",
  },
  {
    icon: Zap,
    title: "APIs REST",
    description: "APIs bem documentadas, versionadas e otimizadas para alta performance e baixa latência.",
  },
  {
    icon: Database,
    title: "Banco de Dados",
    description: "Modelagem eficiente com PostgreSQL e SQLite, queries otimizadas e gestão de migrations.",
  },
  {
    icon: Globe,
    title: "Frontend Moderno",
    description: "Interfaces elegantes e responsivas com React, TypeScript e TailwindCSS.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Sobre Mim
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quem sou eu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Sou um desenvolvedor full-stack apaixonado por construir soluções que unem
            performance técnica e experiência do usuário. Com experiência em Python, FastAPI
            e ecossistemas modernos de frontend, entrego código de qualidade que resolve
            problemas reais.
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="surface-card group rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
