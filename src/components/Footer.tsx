import logo from "@/assets/cars2you-logo.png";
import { COMPANY } from "@/config/appConfig";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logo} alt="Cars2You" className="h-10 w-auto rounded-md" />

            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Cars2You conecta você às melhores oportunidades de veículos antes do
              leilão oficial. Confira, avalie e arremate com transparência.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Empresa</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Sobre a Cars2You</a></li>
              <li><a href="#" className="hover:text-primary">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Contato</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{COMPANY.email}</li>
              <li>{COMPANY.phone}</li>
              <li><a href="#" className="hover:text-primary">Fale conosco</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} Cars2You. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            CNPJ 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
}
