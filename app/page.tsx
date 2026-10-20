import Image from "next/image";


export default function Home() {
  return (
    
      <div className="h-132 flex rounded-2xl bg-gradient-to-b from-[#481707] to-[#17110f] mx-15 my-10 p-8">
        <div>
        <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[#66543a] bg-[#39312a] h-5 px-3  text-[10px] font-semibold leading-none text-[#ffe3a0]">
          🔥 Eleito o Melhor Smash Burger de 2026
        </span>
        <div className="w-full text-white">

                  <h1 className="font-serif text-[38px] font-bold leading-[1.1] ">Sabor defumado na brasa,crosta perfeita 
                    <span className="text-[#ffbd24]"> a cada </span>
                    <span className="text-[#ffbd24]">mordida.</span>
                  </h1>

                  <p className="mt-4 w-[440px] text-[14px] leading-[24px] text-[#c8bfbb]">
                    Blend 100% Angus moído na dia, pão brioche selado na manteiga
                    de garrafa e cafés especiais torrados artesanalmente na nossa
                    casa.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href="/cardapio"
                      className="flex h-10 items-center gap-2 rounded-lg bg-gradient-to-r from-[#ff4b08] to-[#e87900] px-5 text-xs font-semibold text-white shadow-lg transition hover:brightness-110"
                    >
                      Explorar Cardápio
                      <span className="text-base">→</span>
                    </a>

                    <a
                      href="/cardapio"
                      className="flex h-10 items-center rounded-lg border border-[#51443e] bg-[#302723] px-5 text-xs font-semibold text-white transition hover:bg-[#3b302a]"
                    >
                      Ver Mais Pedidos
                    </a>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#33251f] pt-5 text-xs">
                    <p>
                      <strong className="text-white">4.9 ★</strong>
                      <span className="text-[#a99e98]"> (1.840+ avaliações)</span>
                    </p>

                    <span className="text-[#a99e98]">•</span>

                    <p>
                      <strong className="text-white">100% Artesanal</strong>
                      <span className="text-[#a99e98]"> sem conservantes</span>
                    </p>
                  </div>

                </div>
        </div>
        
<div className="relative w-full max-w-[280px] overflow-hidden rounded-2xl border border-[#49332b] bg-[#211714]">

  <Image
    src="/hamburguer.png"
    alt="Duplo Brasa Cheddar"
    width={800}
    height={600}
    className="block h-auto w-full object-cover"
  />

  <div className="absolute bottom-0 left-0 flex items-center gap-2 rounded-tr-xl rounded-bl-xl bg-[#fffefd] px-3 py-2">

    <span className="whitespace-nowrap rounded-md bg-[#fff5ed] px-2 py-1 text-[10px] font-bold text-[#e84b16]">
      R$ 38,90
    </span>

    <div className="whitespace-nowrap">
      <p className="text-[9px] font-bold text-[#211d1b]">
        Duplo Brasa Cheddar
      </p>

      <p className="text-[7px] text-[#817771]">
        2x Smash 90g + Bacon Caramelizado
      </p>
    </div>

  </div>
</div>


        
      </div>


      
      
    
  );
};