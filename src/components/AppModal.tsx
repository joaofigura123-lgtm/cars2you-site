import { useEffect } from "react";
import { Download, X, Smartphone } from "lucide-react";
import { APP_DOWNLOAD_URL } from "@/config/appConfig";

type Props = { open: boolean; onClose: () => void };

export function AppModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      style={{ backgroundColor: "color-mix(in oklab, black 70%, transparent)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-card p-8 shadow-2xl border border-border animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-lg shadow-primary/30">
          <Smartphone className="h-7 w-7 text-primary-foreground" />
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Continue pelo Aplicativo
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Para acessar o catálogo completo, solicitar fotos e vídeos em tempo real,
          consultar pátios e participar dos lances, utilize o aplicativo Cars2You.
        </p>

        <ul className="mt-5 space-y-2 text-sm text-foreground/90">
          <li className="flex gap-2"><span className="text-primary">✓</span> Catálogo completo de veículos</li>
          <li className="flex gap-2"><span className="text-primary">✓</span> Fotos e vídeos em tempo real</li>
          <li className="flex gap-2"><span className="text-primary">✓</span> Participação direta nos lances</li>
          <li className="flex gap-2"><span className="text-primary">✓</span> Consulta de pátios próximos</li>
        </ul>

        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={onClose}
            className="rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Agora Não
          </button>
          <a
            href={APP_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02]"
          >
            <Download className="h-4 w-4" />
            Baixar Aplicativo
          </a>
        </div>
      </div>
    </div>
  );
}
