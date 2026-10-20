
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="pt-BR">
      <body className="m-0 bg-[#fffefd] text-[#211d1b] antialiased">
        <div className="flex min-h-screen flex-col">

          {/* header */}
          <header className="w-full border-b border-[#f5f0eb] bg-[#fffefd]">
            <div className="flex min-h-[76px] w-full items-center justify-between gap-6 px-[4.2%] max-[1050px]:gap-3 max-[760px]:flex-wrap max-[760px]:px-4 max-[760px]:py-3">

              {/* logo */}
              <Link
                href="/"
                className="flex shrink-0 items-center gap-[13px] no-underline max-[430px]:gap-2"
              >
                <span className="grid h-[45px] w-[45px] shrink-0 place-items-center rounded-[13px] bg-gradient-to-br from-[#ff4b08] to-[#ff9900] text-white shadow-[0_4px_11px_rgba(230,91,10,0.20)] max-[760px]:h-10 max-[760px]:w-10">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 5.5c0 3-4.5 4.5-4.5 8a4.5 4.5 0 0 0 9 0c0-1.7-1-3-2.2-4.2"
                      stroke="currentColor"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 17.5h14l2 6.5H7l2-6.5Z"
                      stroke="currentColor"
                      strokeWidth="2.3"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 21h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <span className="flex flex-col gap-[3px]">
                  <span className="whitespace-nowrap font-serif text-2xl font-bold leading-none tracking-[-0.8px] text-[#211d1b] max-[1050px]:text-[21px] max-[430px]:text-lg">
                    Brasa &amp; Grão
                  </span>

                  <span className="whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.65px] text-[#817771] max-[1050px]:text-[10px] max-[430px]:text-[8px]">
                    smash burgers &amp; specialty coffee
                  </span>
                </span>
              </Link>

              {/* navegação */}
              <nav
                aria-label="navegação principal"
                className="flex shrink-0 items-center gap-[3px] rounded-full border border-[#e9e1d8] bg-[#faf7f3] p-[5px] max-[760px]:order-3 max-[760px]:w-full max-[760px]:justify-center"
              >
                <Link
                  href="/"
                  aria-current={pathname === "/" ? "page" : undefined}
                  className={`flex min-h-10 items-center justify-center rounded-full px-[21px] text-sm font-medium no-underline transition-colors max-[1050px]:px-[14px] max-[760px]:flex-1 max-[760px]:px-2 max-[760px]:text-[13px] ${
                    pathname === "/"
                      ? "bg-white text-[#e84d0b] shadow-sm"
                      : "text-[#655c56] hover:text-[#e84d0b]"
                  }`}
                >
                  Início
                </Link>

                <Link
                  href="/cardapio"
                  aria-current={
                    pathname.startsWith("/cardapio") ? "page" : undefined
                  }
                  className={`flex min-h-10 items-center justify-center whitespace-nowrap rounded-full px-[21px] text-sm font-medium no-underline transition-colors max-[1050px]:px-[14px] max-[760px]:flex-1 max-[760px]:px-2 max-[760px]:text-[13px] ${
                    pathname.startsWith("/cardapio")
                      ? "bg-white text-[#e84d0b] shadow-sm"
                      : "text-[#655c56] hover:text-[#e84d0b]"
                  }`}
                >
                  Cardápio Completo
                </Link>
              </nav>

              {/* status e painel gestor */}
              <div className="flex shrink-0 items-center justify-end gap-[15px] max-[1050px]:gap-2 max-[430px]:w-full max-[430px]:justify-between">
                <span className="inline-flex min-h-[30px] items-center justify-center gap-[7px] whitespace-nowrap rounded-full bg-[#dcfce8] px-[13px] text-xs font-semibold text-[#16803d] max-[760px]:px-[9px] max-[760px]:text-[11px]">
                  <span className="h-[9px] w-[9px] rounded-full bg-[#19c568]" />
                  Aberto • 25–35 min
                </span>

                <Link
                  href="/gestor"
                  className="inline-flex min-h-10 items-center justify-center gap-[9px] whitespace-nowrap rounded-[9px] border border-[#e8dfd6] bg-white px-[14px] text-[13px] font-semibold text-[#282321] no-underline hover:bg-[#faf6f1] max-[760px]:min-h-9 max-[760px]:px-[10px] max-[760px]:text-xs"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-[17px] w-[17px] shrink-0"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="5" height="5" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="12" y="3" width="5" height="5" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="3" y="12" width="5" height="5" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="12" y="12" width="5" height="5" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  <span>Painel Gestor</span>
                </Link>
              </div>

            </div>
          </header>

          {/* conteúdo de cada página */}
          <main className="w-full flex-1">
            {children}
          </main>

          {/* FOOTER */}
      <footer className="mt-auto w-full bg-[#171310] px-[4.2%] text-[#F8F3EE]">
        <div className="flex min-h-[104px] items-center justify-between gap-6 border-b border-white/10 py-6 max-[760px]:flex-col max-[760px]:items-start">
          
          {/* LOGO E ENDEREÇO */}
          <Link
            href="/"
            className="flex items-center gap-3 no-underline"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#ff4b08] to-[#ff9900] text-white shadow-[0_4px_11px_rgba(230,91,10,0.2)]">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M16 5.5c0 3-4.5 4.5-4.5 8a4.5 4.5 0 0 0 9 0c0-1.7-1-3-2.2-4.2"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                />
                <path
                  d="M9 17.5h14l2 6.5H7l2-6.5Z"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 21h8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span className="flex flex-col gap-1">
              <span className="font-serif text-xl font-bold leading-none tracking-tight text-white">
                Brasa &amp; Grão
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.5px] text-[#928780]">
                Rua dos Pinheiros, 480 • São Paulo
              </span>
            </span>
          </Link>

          {/* LINKS */}
          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] font-medium text-[#F0EAE5] max-[760px]:gap-x-5"
          >
            <Link
              href="/"
              className="transition-colors hover:text-orange-500"
            >
              Início
            </Link>

            <Link
              href="/cardapio"
              className="transition-colors hover:text-orange-500"
            >
              Cardápio Completo
            </Link>

            <Link
              href="/gestor"
              className="transition-colors hover:text-orange-500"
            >
              Área do Gestor (Admin)
            </Link>
          </nav>
        </div>

        {/* DIREITOS AUTORAIS E HORÁRIO */}
        <div className="flex min-h-[68px] items-center justify-between gap-4 py-5 text-xs text-[#A69B93] max-[760px]:flex-col max-[760px]:items-start">
          <p className="leading-relaxed">
            © 2026 Brasa &amp; Grão Artesanal. Layout didático para aula de Next.js (Rotas &amp; Layouts).
          </p>

          <p className="shrink-0">
            Terça a Domingo • 18h às 23h30
          </p>
        </div>
      </footer>

        </div>
      </body>
    </html>
  );
}
