const techGroups = [
  {
    title: "Backend",
    color: "oklch(0.65 0.18 260 / 15%)",
    borderColor: "oklch(0.65 0.18 260 / 25%)",
    iconColor: "oklch(0.65 0.18 260)",
    items: [
      { name: "Python", level: "Avançado" },
      { name: "FastAPI", level: "Avançado" },
      { name: "SQLAlchemy", level: "Avançado" },
      { name: "PostgreSQL", level: "Avançado" },
      { name: "SQLite", level: "Intermediário" },
    ],
  },
  {
    title: "Frontend",
    color: "oklch(0.7 0.15 160 / 15%)",
    borderColor: "oklch(0.7 0.15 160 / 25%)",
    iconColor: "oklch(0.7 0.15 160)",
    items: [
      { name: "Next.js", level: "Avançado" },
      { name: "React", level: "Avançado" },
      { name: "TypeScript", level: "Avançado" },
      { name: "TailwindCSS", level: "Avançado" },
    ],
  },
  {
    title: "DevOps",
    color: "oklch(0.75 0.12 40 / 15%)",
    borderColor: "oklch(0.75 0.12 40 / 25%)",
    iconColor: "oklch(0.75 0.12 40)",
    items: [
      { name: "Docker", level: "Intermediário" },
      { name: "Linux", level: "Intermediário" },
      { name: "Git", level: "Avançado" },
    ],
  },
];

export function TechSection() {
  return (
    <section id="tecnologias" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0 radial-glow opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Stack Tecnológico
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tecnologias
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Conjunto de ferramentas e tecnologias que utilizo para construir soluções robustas e modernas.
          </p>
        </div>

        {/* Tech cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group) => (
            <div
              key={group.title}
              className="surface-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                borderLeft: `3px solid ${group.borderColor}`,
              }}
            >
              <h3
                className="mb-5 text-sm font-semibold uppercase tracking-wider"
                style={{ color: group.iconColor }}
              >
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="group/tech inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: group.color,
                      border: `1px solid ${group.borderColor}`,
                      color: group.iconColor,
                    }}
                  >
                    {item.name}
                    <span
                      className="text-[10px] font-normal opacity-60"
                    >
                      {item.level}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
