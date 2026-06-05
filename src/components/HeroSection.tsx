import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import avatarImg from "../assets/avatar.png";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 radial-glow" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Avatar */}
        <div className="animate-fade-in mb-8 opacity-0" style={{ animationDelay: "0.1s" }}>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse-glow" />
            <img
              src={avatarImg}
              alt="João Gerhard — Full Stack Developer"
              className="relative h-36 w-36 rounded-full border-2 border-primary/30 object-cover shadow-2xl shadow-primary/20"
              width={144}
              height={144}
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="animate-fade-in-up text-4xl font-bold tracking-tight text-foreground opacity-0 sm:text-5xl md:text-6xl"
          style={{ animationDelay: "0.2s" }}
        >
          João Gerhard
        </h1>

        {/* Title */}
        <p
          className="animate-fade-in-up mt-4 text-lg font-medium text-primary opacity-0 sm:text-xl"
          style={{ animationDelay: "0.35s" }}
        >
          Full Stack Developer
        </p>

        {/* Tech stack badges */}
        <div
          className="animate-fade-in-up mt-3 flex flex-wrap justify-center gap-2 opacity-0"
          style={{ animationDelay: "0.45s" }}
        >
          {["Python", "FastAPI", "Next.js", "PostgreSQL"].map((tech) => (
            <span
              key={tech}
              className="tag-pill rounded-full px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p
          className="animate-fade-in-up mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground opacity-0 sm:text-lg"
          style={{ animationDelay: "0.55s" }}
        >
          Desenvolvedor focado em criar sistemas escaláveis, APIs robustas e aplicações web modernas.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-in-up mt-8 flex flex-wrap justify-center gap-3 opacity-0"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#tecnologias"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5"
          >
            Ver Projetos
            <ArrowDown size={16} />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-card hover:-translate-y-0.5"
          >
            Entrar em Contato
          </a>
        </div>

        {/* Social links */}
        <div
          className="animate-fade-in-up mt-10 flex items-center gap-4 opacity-0"
          style={{ animationDelay: "0.85s" }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border/50 p-2.5 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border/50 p-2.5 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:joao@gerhard.dev"
            className="rounded-full border border-border/50 p-2.5 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:-translate-y-0.5"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
