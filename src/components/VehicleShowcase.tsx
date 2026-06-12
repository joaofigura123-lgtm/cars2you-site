import { useState, useEffect } from "react";
import { Camera, Video, Gavel, Eye, Calendar, Gauge, MapPin } from "lucide-react";
import { vehicles } from "@/data/vehicles";

type Props = { onOpenModal: () => void };

const statusStyles: Record<string, string> = {
  "Aberto": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "Encerrando em breve": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  "Novo": "bg-sky-500/15 text-sky-300 border-sky-500/30",
  "Destaque": "bg-primary-glow/20 text-primary-foreground border-primary-glow/40",
};

export function VehicleShowcase({ onOpenModal }: Props) {
  const [city, setCity] = useState("Brasil");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => setCity(data.city || "Brasil"))
      .catch(() => {});
  }, []);

  return (
    <section id="veiculos" className="relative bg-gradient-to-b from-background via-muted/20 to-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">
              Vitrine Cars2You
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Veículos disponíveis agora
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Uma seleção atualizada de oportunidades pré-leilão. O catálogo completo,
              fotos extras e lances acontecem dentro do aplicativo.
            </p>
          </div>
          <button
            onClick={onOpenModal}
            className="rounded-lg bg-gradient-to-r from-primary to-primary-glow px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.03]"
          >
            Ver catálogo completo
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => (
            <article
              key={v.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-glow/50 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-muted">
                <img
                  src={v.image}
                  alt={v.name}
                  loading="lazy"
                  width={960}
                  height={660}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-90" />
                <span
                  className={`absolute left-3 top-3 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wide backdrop-blur-md ${statusStyles[v.status]}`}
                >
                  {v.status}
                </span>
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-extrabold leading-tight text-white drop-shadow-md">
                      {v.name}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-white/90">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" /> {v.year}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Gauge className="h-3.5 w-3.5" /> {v.mileage} km
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-end justify-between gap-3 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary-glow/5 px-4 py-3">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    </div>
                    <div className="text-2xl font-extrabold tracking-tight text-foreground">
                      {v.currentBid}
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {city}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <button
                    onClick={onOpenModal}
                    aria-label="Solicitar fotos"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-background/60 px-2 py-2 text-[11px] font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-muted"
                  >
                    <Camera className="h-3.5 w-3.5" /> Fotos
                  </button>
                  <button
                    onClick={onOpenModal}
                    aria-label="Solicitar vídeo"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-background/60 px-2 py-2 text-[11px] font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-muted"
                  >
                    <Video className="h-3.5 w-3.5" /> Vídeos
                  </button>
                  <button
                    onClick={onOpenModal}
                    aria-label="Ver detalhes"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-background/60 px-2 py-2 text-[11px] font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-muted"
                  >
                    <Eye className="h-3.5 w-3.5" /> Detalhes
                  </button>
                </div>

                <button
                  onClick={onOpenModal}
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow px-4 py-3 text-sm font-bold text-primary-foreground shadow-md shadow-primary/30 transition-transform hover:scale-[1.02]"
                >
                  <Gavel className="h-4 w-4" /> Acessar Catálogo Completo
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
