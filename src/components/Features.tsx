import {
  Clock, Camera, MapPin, Gavel, BookOpen, ShieldCheck, ArrowRight,
} from "lucide-react";

type Props = { onOpenModal: () => void };

const items = [
  { icon: Clock, title: "Oportunidades antes do leilão", desc: "Veja veículos disponíveis antes que entrem no processo oficial de leilão." },
  { icon: Camera, title: "Fotos e vídeos em tempo real", desc: "Solicite mídias atualizadas dos veículos diretamente do pátio." },
  { icon: MapPin, title: "Consulta de pátios próximos", desc: "Encontre o pátio mais perto de você para avaliar pessoalmente." },
  { icon: Gavel, title: "Acompanhamento de lances", desc: "Acompanhe e participe dos lances em tempo real pelo aplicativo." },
  { icon: BookOpen, title: "Catálogo completo no aplicativo", desc: "Carros, motos, caminhões e veículos comerciais sempre atualizados." },
  { icon: ShieldCheck, title: "Processo simples e transparente", desc: "Informações claras, pátios verificados e suporte dedicado." },
];

export function Features({ onOpenModal }: Props) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Por que Cars2You
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Uma nova forma de comprar veículos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tudo o que você precisa para avaliar e arrematar um veículo, na palma da sua mão.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow shadow-lg shadow-primary/20">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <button
                  onClick={onOpenModal}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
                >
                  Saiba mais no app <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
