import { ShieldAlert } from "lucide-react";

export function SecurityNotice() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
              <ShieldAlert className="h-7 w-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                Importante
              </div>
              <h3 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                Sua segurança em primeiro lugar
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/90">
                Para sua segurança, qualquer pagamento relacionado aos veículos deve ser
                realizado <strong className="text-primary">presencialmente no pátio mais próximo de você</strong>.
                A Cars2You <strong>não solicita pagamentos online</strong> referentes à
                compra dos veículos anunciados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
