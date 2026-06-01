import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/cars2you-logo.png";

type Props = { onOpenModal: () => void };

export function Header({ onOpenModal }: Props) {
  const [open, setOpen] = useState(false);
  const navs = [
    { label: "Veículos", href: "#veiculos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Segurança", href: "#seguranca" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Cars2You" className="h-10 w-auto rounded-md" />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navs.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#veiculos"
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Ver veículos
          </a>
        </div>

        <button
          className="md:hidden rounded-lg p-2 text-foreground hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 p-4">
            {navs.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
