import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="relative border-t border-border/40 px-6 py-16">
      <div className="pointer-events-none absolute inset-0 radial-glow opacity-30" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8">
          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Vamos trabalhar juntos?
            </h2>
            <p className="mt-3 max-w-md text-base text-muted-foreground">
              Estou aberto a oportunidades de freelancing, projetos colaborativos e posições full-time.
            </p>
            <a
              href="mailto:joao@gerhard.dev"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              joao@gerhard.dev
            </a>
          </div>

          {/* Divider */}
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Bottom row */}
          <div className="flex w-full max-w-md flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-muted-foreground">
              © {currentYear} João Gerhard. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:joao@gerhard.dev"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:text-primary"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <p className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
            Feito com <Heart size={12} className="text-primary/60" /> e muito código
          </p>
        </div>
      </div>
    </footer>
  );
}
