
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-cars.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Pátio de veículos premium Cars2You"
          className="h-full w-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-glow" />
            Oportunidades em tempo real
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Seu próximo veículo{" "}
            <span className="bg-gradient-to-r from-primary-glow to-foreground bg-clip-text text-transparent">
              pode estar aqui.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Veja oportunidades exclusivas de carros, motos e caminhões{" "}
            <strong className="text-foreground">antes do leilão oficial</strong>
            
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#veiculos"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-glow px-7 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-[1.03]"
            >
              Ver Veículos Disponíveis
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#seguranca"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-7 py-4 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              <ShieldCheck className="h-5 w-5 text-primary-glow" />
              Como funciona
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <div>
              <div className="text-2xl font-bold text-foreground">+10k</div>
              <div className="text-xs text-muted-foreground">Veículos por mês</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">+50</div>
              <div className="text-xs text-muted-foreground">Pátios no Brasil</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-xs text-muted-foreground">Transparência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

