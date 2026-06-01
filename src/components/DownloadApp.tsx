import { Download, Check, Smartphone } from "lucide-react";

type Props = { onOpenModal: () => void };

const benefits = [
  "Catálogo completo",
  "Novos veículos diariamente",
  "Fotos exclusivas",
  "Vídeos em tempo real",
  "Participação nos lances",
  "Consulta de pátios",
];

export function DownloadApp({ onOpenModal }: Props) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, color-mix(in oklab, var(--primary) 40%, transparent), transparent 50%), radial-gradient(circle at 80% 70%, color-mix(in oklab, var(--primary-glow) 30%, transparent), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 sm:p-14">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-lg shadow-primary/30">
                <Smartphone className="h-7 w-7 text-primary-foreground" />
              </div>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Desbloqueie o acesso{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  completo
                </span>{" "}
                pelo aplicativo.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tudo que você precisa para comprar com segurança em um só lugar.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenModal}
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-glow px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-[1.03]"
              >
                <Download className="h-5 w-5" />
                Baixar Aplicativo
              </button>
            </div>

            <div className="relative hidden bg-gradient-to-br from-primary/10 via-background to-primary-glow/10 lg:block">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="relative aspect-[9/19] w-full max-w-[280px] rounded-[2.5rem] border-[10px] border-foreground/90 bg-background shadow-2xl">
                  <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground/90" />
                  <div className="flex h-full flex-col gap-3 overflow-hidden rounded-[1.7rem] p-4 pt-8">
                    <div className="h-3 w-20 rounded-full bg-muted" />
                    <div className="h-28 rounded-xl bg-gradient-to-br from-primary/30 to-primary-glow/20" />
                    <div className="h-3 w-32 rounded-full bg-muted" />
                    <div className="h-2 w-24 rounded-full bg-muted/70" />
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="h-20 rounded-lg bg-muted" />
                      <div className="h-20 rounded-lg bg-muted" />
                      <div className="h-20 rounded-lg bg-muted" />
                      <div className="h-20 rounded-lg bg-muted" />
                    </div>
                    <div className="mt-auto h-10 rounded-xl bg-gradient-to-r from-primary to-primary-glow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
