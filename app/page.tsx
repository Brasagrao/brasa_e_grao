import Image from "next/image";

export default function Home() {
  return (
    <div className="m-10 max-w-\[1400px\] px-3 py-2 text-[#211a17] sm:px-5">

      
      <div className="relative flex min-h-[326px] items-center justify-between gap-7 overflow-visible rounded-2xl bg-gradient-to-b from-[#351408] to-[#1b110e] px-6 py-7 sm:px-8">
        
        <div className="min-w-0 flex-1">
          <span className="inline-flex h-5 items-center whitespace-nowrap rounded-full border border-[#66543a] bg-[#39312a] px-2 text-[8px] font-semibold leading-none text-[#ffe3a0]">
            🔥 Eleito o Melhor Smash Burger de 2026
          </span>

          <div className="mt-2 text-white">
            <h1 className=" font-serif text-[25px] font-bold leading-[1.05] sm:text-[29px]"> Sabor defumado na brasa, crosta perfeita{" "}
              <span className="text-[#ffbd24]">
                a cada mordida.
              </span>
            </h1>

            <p className="mt-3 max-w-[340px] text-[14px] leading-4 text-[#c8bfbb]">
              Blend 100% Angus moído no dia, pão brioche selado
              na manteiga de garrafa e cafés especiais torrados
              artesanalmente na nossa casa.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a
                href="/cardapio"
                className="flex h-7 items-center gap-2 rounded-md bg-gradient-to-r from-[#ff4b08] to-[#e87900] px-3.5 text-[9px] font-semibold text-white shadow-lg transition hover:brightness-110"
              >
                Explorar Cardápio
                <span className="text-sm">→</span>
              </a>

              <a
                href="#mais-pedidos"
                className="flex h-7 items-center rounded-md border border-[#51443e] bg-[#302723] px-3.5 text-[9px] font-semibold text-white transition hover:bg-[#3b302a]"
              >
                Ver Mais Pedidos
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#33251f] pt-3 text-[9px]">
              <p>
                <strong className="text-white">4.9 ★</strong>
                <span className="text-[#a99e98]">
                  {" "}(1.840+ avaliações)
                </span>
              </p>

              <span className="text-[#a99e98]">•</span>

              <p>
                <strong className="text-white">100% Artesanal</strong>
                <span className="text-[#a99e98]">
                  {" "}sem conservantes
                </span>
              </p>
            </div>
          </div>
        </div>

       
        <div className="relative mr-1 hidden w-[40%]  shrink-0 self-center sm:block">
          <div className="overflow-hidden rounded-xl border border-[#49332b]">
            <Image src="/hamburguer.png" alt="Duplo Brasa Cheddar" width={800} height={600} priority className="block h-[290px] w-[320px] object-cover"/>
          </div>

          
          <div className="absolute -bottom-2 left-[-12px]  flex items-center gap-2 rounded-xl bg-white px-2.5 py-2 shadow-lg">
            <span className="whitespace-nowrap rounded-md bg-[#fff5ed] px-1.5 py-1 text-[15px] font-bold text-[#e84b16]">
              R$ 38,90
            </span>

            <div className="whitespace-nowrap">
              <p className="text-[13px] font-bold text-[#211d1b]">
                Duplo Brasa Cheddar
              </p>
              <p className="text-[10px] text-[#817771]">
                2x Smash 90g + Bacon Caramelizado
              </p>
            </div>
          </div>
        </div>
      </div>

      
      
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        
        <div className="flex h-[96px] items-center gap-6 rounded-[22px] border border-[#e8ddd2] bg-white px-7 py-6 shadow-sm">
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[15px] bg-[#fff7f0]">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12H12V2Z"
                stroke="#EA580C"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12L2.09998 10.5"
                stroke="#EA580C"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="min-w-0">
            <h2 className="text-[11px] font-bold leading-tight text-[#211d1b]">
              Blend 100% Angus Fresco
            </h2>
            <p className="mt-2 text-[10px] leading-[1.5] text-[#625a55]">
              Carne selecionada e moída diariamente na nossa cozinha.
            </p>
          </div>
        </div>

        <div className="flex h-[96px] items-center gap-6 rounded-[22px] border border-[#e8ddd2] bg-white px-7 py-6 shadow-sm">
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[15px] bg-[#fff7f0]">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                clipPath="url(#coffee-clip)"
                stroke="#EA580C"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18" />
                <path d="M2 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5783 15.0609 21 14 21H6C4.93913 21 3.92172 20.5783 3.17157 19.8284C2.42143 19.0783 2 18.0609 2 17V8Z" />
                <path d="M6 1V4" />
                <path d="M10 1V4" />
                <path d="M14 1V4" />
              </g>
              <defs>
                <clipPath id="coffee-clip">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="min-w-0">
            <h2 className="text-[11px] font-bold leading-tight text-[#211d1b]">
              Torrefação Própria
            </h2>
            <p className="mt-2 text-[10px] leading-[1.5] text-[#625a55]">
              Grãos especiais do Cerrado Mineiro e sobremesas autorais.
            </p>
          </div>
        </div>

        <div className="flex h-[96px] items-center gap-6 rounded-[22px] border border-[#e8ddd2] bg-white px-7 py-6 shadow-sm">
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[15px] bg-[#fff7f0]">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                clipPath="url(#clock-clip)"
                stroke="#EA580C"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
                <path d="M12 6V12L16 14" />
              </g>
              <defs>
                <clipPath id="clock-clip">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="min-w-0">
            <h2 className="text-[11px] font-bold leading-tight text-[#211d1b]">
              Entrega Quente em 30 min
            </h2>
            <p className="mt-2 text-[12px] leading-[1.5] text-[#625a55]">
              Embalagem térmica selada para manter a crocância.
            </p>
          </div>
        </div>
      </div>


 
      
<div id="mais-pedidos" className="mt-5 pb-5">
 
  <div className="mb-4 flex items-center justify-between gap-3">
    <div>
      <p className="text-[11px] font-semibold text-[#f05a20]">
        Favoritos da Casa
      </p>
      <h2 className="mt-1 font-serif text-2xl font-bold leading-tight text-[#211a17]">
        Os Mais Pedidos da Semana
      </h2>
    </div>

    <a
      href="/cardapio"
      className="shrink-0 rounded-md border border-[#e9dfd7] bg-white px-3 py-2 text-xs font-semibold transition hover:bg-[#fff1e7]"
    >
      Ver todos os pratos →
    </a>
  </div>


  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">


    <div className="overflow-hidden rounded-xl border border-[#e9e0d9] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-[180px] overflow-hidden bg-[#211a17]">
        <Image
          src="/hamburguer2.png"
          alt="Duplo Brasa & Bacon"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />

        <span className="absolute left-2 top-2 rounded-full bg-[#ff5a16] px-2 py-1 text-[9px] font-bold text-white shadow">
          MAIS VENDIDO
        </span>

        <span className="absolute bottom-2 right-2 rounded-full bg-white px-2 py-1 text-[10px] font-bold text-[#211a17] shadow">
          ★ 4.9
        </span>
      </div>

      <div className="p-3">
        <h3 className="text-sm font-bold text-[#211a17]">
          Duplo Brasa & Bacon
        </h3>

        <p className="mt-2 min-h-[48px] text-[11px] leading-[1.5] text-[#817771]">
          Dois smash burgers de 90g na brasa, queijo cheddar derretido, fatias de bacon crocante e molho defumado da casa no brioche.
        </p>

        <div className="mt-3 flex items-center justify-between gap-2 border-t border-dotted border-[#f0e8e2] pt-3">
          <div>
            <p className="text-[9px] uppercase text-[#817771]">
              Individual
            </p>
            <p className="text-sm font-bold text-[#e84b16]">
              R$ 38,90
            </p>
          </div>

          <a
            href="/cardapio"
            className="rounded-md bg-[#211a17] px-3 py-2 text-[10px] font-semibold text-white transition hover:bg-[#e84b16]"
          >
            + Pedir Agora
          </a>
        </div>
      </div>
    </div>

    <div className="overflow-hidden rounded-xl border border-[#e9e0d9] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-[180px] overflow-hidden bg-[#211a17]">
        <Image
          src="/hamburguer3.png"
          alt="Truffle Brie & Cebola"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />

        <span className="absolute left-2 top-2 rounded-full bg-[#211a17]/90 px-2 py-1 text-[9px] font-bold text-white shadow">
          CHEF'S CHOICE
        </span>

        <span className="absolute bottom-2 right-2 rounded-full bg-white px-2 py-1 text-[10px] font-bold text-[#211a17] shadow">
          ★ 5.0
        </span>
      </div>

      <div className="p-3">
        <h3 className="text-sm font-bold text-[#211a17]">
          Truffle Brie & Cebola
        </h3>

        <p className="mt-2 min-h-[48px] text-[11px] leading-[1.5] text-[#817771]">
          Hambúrguer artesanal de 180g, queijo brie maciçado, geleia artesanal de pimenta com bacon, rúcula fresca e maionese trufada no pão australiano.
        </p>

        <div className="mt-3 flex items-center justify-between gap-2 border-t border-dotted border-[#f0e8e2] pt-3">
          <div>
            <p className="text-[9px] uppercase text-[#817771]">
              Individual
            </p>
            <p className="text-sm font-bold text-[#e84b16]">
              R$ 44,90
            </p>
          </div>

          <a
            href="/cardapio"
            className="rounded-md bg-[#211a17] px-3 py-2 text-[10px] font-semibold text-white transition hover:bg-[#e84b16]"
          >
            + Pedir Agora
          </a>
        </div>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="overflow-hidden rounded-xl border border-[#e9e0d9] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-[180px] overflow-hidden bg-[#211a17]">
        <Image
          src="/hamburguer4.png"
          alt="Crispy Chicken Hot Honey"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />

        <span className="absolute left-2 top-2 rounded-full bg-[#211a17]/90 px-2 py-1 text-[9px] font-bold text-white shadow">
          NOVO
        </span>

        <span className="absolute bottom-2 right-2 rounded-full bg-white px-2 py-1 text-[10px] font-bold text-[#211a17] shadow">
          ★ 4.8
        </span>
      </div>

      <div className="p-3">
        <h3 className="text-sm font-bold text-[#211a17]">
          Crispy Chicken Hot Honey
        </h3>

        <p className="mt-2 min-h-[48px] text-[11px] leading-[1.5] text-[#817771]">
          Sobrecoxa de frango empanada super crocante, mel picante artesanal, picles da casa, salada coleslaw cremosa e pão de batata.
        </p>

        <div className="mt-3 flex items-center justify-between gap-2 border-t border-dotted border-[#f0e8e2] pt-3">
          <div>
            <p className="text-[9px] uppercase text-[#817771]">
              Individual
            </p>
            <p className="text-sm font-bold text-[#e84b16]">
              R$ 34,90
            </p>
          </div>

          <a
            href="/cardapio"
            className="rounded-md bg-[#211a17] px-3 py-2 text-[10px] font-semibold text-white transition hover:bg-[#e84b16]"
          >
            + Pedir Agora
          </a>
        </div>
      </div>
    </div>

  </div>
</div>

    </div>
  );
}
