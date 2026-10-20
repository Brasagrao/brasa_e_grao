"use client";

import { useState } from "react";
import Image from "next/image";

const categorias = [
  { nome: "Todos os Itens", icone: "🍔", quantidade: 10 },
  { nome: "Smash Burgers", icone: "🔥", quantidade: 4 },
  { nome: "Porções & Entradas", icone: "🍟", quantidade: 3 },
  { nome: "Cafés & Shakes", icone: "☕", quantidade: 3 },
];

const produtos = [
  {
    id: 1,
    nome: "Clássico American Smash",
    descricao:
      "2x smash 90g, duplo american cheese artesanal, picles agridoce, cebola roxa picada, mostarda dijon e ketchup da casa.",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    selo: "CAMPEÃO",
    nota: "4.9",
    tipo: "180G DE CARNE",
    preco: 34.9,
    categoria: "Smash Burgers",
  },
  {
    id: 2,
    nome: "Oklahoma Crispy Onion",
    descricao:
      "Dois discos de 90g prensados na chapa com fios finíssimos de cebola caramelizada, cheddar inglês e maionese de alho negro.",
    imagem:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    selo: "PRENSADO NA CEBOLA",
    nota: "4.9",
    tipo: "180G DE CARNE",
    preco: 37.9,
    categoria: "Smash Burgers",
  },
  {
    id: 3,
    nome: "Portobello Crispy Melt",
    descricao:
      "Cogumelo Portobello gigante empanado na panko e recheado com queijo meia-cura, tomate confit, rúcula e pesto de manjericão.",
    imagem: "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    selo: "100% VEGETARIANO",
    nota: "4.8",
    tipo: "VEGETARIANO",
    preco: 39.9,
    categoria: "Smash Burgers",
  },
];

const complementos = [
  {
    id: 4,
    nome: "Fritas Rústicas com Alecrim & Páprica",
    descricao:
      "Batatas cortadas à mão, fritas em dupla imersão com flor de sal, alecrim fresco e maionese de páprica defumada.",
    imagem:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80",
    etiqueta: "350g",
    preco: 24.9,
    categoria: "Porções & Entradas",
  },
  {
    id: 5,
    nome: "Shake Espresso & Caramelo Salgado",
    descricao:
      "Sorvete artesanal de baunilha em fava batido com dose dupla de espresso 100% arábica e calda de flor de sal.",
    imagem:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80",
    etiqueta: "400ml",
    preco: 26.9,
    categoria: "Cafés & Shakes",
  },
  {
    id: 6,
    nome: "Latte Artesanal Torra Média",
    descricao:
      "Grãos de microlote da Serra da Mantiqueira com notas de chocolate amargo e avelã, leite vaporizado cremoso.",
    imagem:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    etiqueta: "Quente/Gelado",
    preco: 15.9,
    categoria: "Cafés & Shakes",
  },
  {
    id: 7,
    nome: "Brownie Belga 70% na Chapa",
    descricao:
      "Servido quentinho na panelinha de ferro com sorvete de creme artesanal e farofa crocante de castanhas.",
    imagem:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    etiqueta: "Sobremesa",
    preco: 28.9,
    categoria: "Cafés & Shakes",
  },
];

export default function CardapioPage() {
  const [categoriaAtiva, setCategoriaAtiva] =
    useState("Todos os Itens");

  return (
    <div className="min-h-screen bg-[#FAF7F2] px-4 py-6 text-[#241B16] md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* BANNER DO CARDÁPIO */}
        <section className="flex flex-col gap-6 rounded-[22px] border border-orange-100 bg-gradient-to-r from-[#FFF8ED] to-[#FFEBD0] px-6 py-7 md:flex-row md:items-center md:justify-between md:px-8 md:py-8">

          {/* Informações do cardápio */}
          <div className="flex-1">
            <span className="inline-flex rounded-full border border-orange-100 bg-white/60 px-3 py-1 text-[10px] font-medium text-red-700">
              Cardápio Artesanal • Edição de Outono
            </span>

            <h1 className="mt-3 font-serif text-2xl font-extrabold tracking-tight sm:text-3xl">
              Escolha sua experiência na brasa
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#766B61]">
              Todos os hambúrgueres acompanham maionese
              defumada da casa. Adicione batata rústica
              e bebida artesanal por +R$ 16,00.
            </p>
          </div>

          {/* Combo do dia */}
          <div className="text-left md:min-w-[280px] md:text-right">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-red-700">
              Combo do dia
            </span>

            <h2 className="mt-1 font-serif text-xl font-extrabold sm:text-2xl">
              Smash + Fritas + Café Gelado
            </h2>

            <p className="mt-2 text-xs font-semibold text-orange-600">
              De R$ 62,00 por R$ 49,90
            </p>
          </div>
        </section>

        {/* FILTROS DE CATEGORIA */}
        <nav
          aria-label="Categorias do cardápio"
          className="mt-7 flex flex-wrap items-center gap-2">
          {categorias.map((categoria) => {
            const selecionada =
              categoriaAtiva === categoria.nome;

            return (
              <button
                key={categoria.nome}
                type="button"
                onClick={() => setCategoriaAtiva(categoria.nome)}
                aria-pressed={selecionada}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  selecionada
                    ? "border-orange-600 bg-orange-600 text-white shadow-md shadow-orange-600/20"
                    : "border-[#E9E0D7] bg-white text-[#4F443C] hover:border-orange-300 hover:bg-orange-50"
                }`}
              >
                {categoria.icone} {categoria.nome} (
                {categoria.quantidade})
              </button>
            );
          })}
        </nav>        

      </div>

          <h1 className="mt-10 text-start font-serif font-extrabold text-2xl  tracking-tight sm:text-3xl"> 
            Linha Smash &amp; Brasa
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#766B61]">
             Feitos com blend 100% Angus certificado e pão de fermentação natural
          </p>

          {/* GRID DE PRODUTOS */}
          <div className="mt-7 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            {produtos
              .filter(
                (produto) =>
                  categoriaAtiva === "Todos os Itens" ||
                  produto.categoria === categoriaAtiva
              )
              .map((produto) => (
                <article
                  key={produto.id}
                  className="flex h-full flex-col overflow-hidden rounded-[22px] border border-[#E9E0D7] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* FOTO */}
                  <div className="relative h-[250px] shrink-0 overflow-hidden sm:h-[280px]">
                    <Image
                      src={produto.imagem}
                      alt={produto.nome}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition duration-500 hover:scale-105"/>

                    {/* SELO */}
                    <span
                      className={`absolute left-5 top-5 max-w-[85%] rounded-full px-4 py-2 text-xs font-bold text-white ${
                        produto.id === 1
                          ? "bg-orange-600"
                          : produto.id === 3
                            ? "bg-green-700"
                            : "bg-[#241B16]/90"
                        }`
                      }>
                      {produto.selo}
                    </span>

                    {/* AVALIAÇÃO */}
                    <span className="absolute bottom-4 right-4 rounded-full bg-white px-3 py-2 text-sm font-semibold text-[#241B16] shadow">
                      ★ {produto.nota}
                    </span>
                  </div>

                  {/* CONTEÚDO */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-xl font-extrabold tracking-tight sm:text-[22px]">
                      {produto.nome}
                    </h3>

                    <p className="mt-3 flex-1 text-[15px] leading-[1.7] text-[#625A54]">
                      {produto.descricao}
                    </p>

                    {/* DIVISÓRIA */}
                    <div className="my-5 border-t border-dashed border-[#E9E0D7]" />

                    {/* PREÇO E BOTÃO */}
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="text-xs font-medium text-[#766B61]">
                          {produto.tipo}
                        </p>

                        <p className="mt-1 text-2xl font-serif font-bold text-orange-600">
                          {produto.preco.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          console.log("Adicionar ao pedido:", produto.nome)
                        }
                        className="shrink-0 rounded-xl bg-[#1D1917] px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600 sm:px-5">
                        + Adicionar
                      </button>
                    </div>
                  </div>
                </article>
              )
            )
          }
          </div>
        
        <h1 className="mt-10 text-start font-serif font-extrabold text-2xl  tracking-tight sm:text-3xl"> 
            Acompanhamentos &amp; Cafeteria
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#766B61]">
             Para compartilhar na mesa ou fechar sua refeição com chave de ouro.
          </p>
          
          <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-2">
    {complementos
      .filter(
        (produto) =>
          categoriaAtiva === "Todos os Itens" ||
          produto.categoria === categoriaAtiva
      )
      .map((produto) => (
        <article
          key={produto.id}
          className="flex min-w-0 flex-col gap-4 rounded-[22px] border border-[#E9E0D7] bg-white p-4 shadow-sm transition duration-300 hover:shadow-md sm:flex-row sm:items-center sm:gap-6 sm:p-6"
        >
          {/* IMAGEM */}
          <div className="h-44 w-full shrink-0 overflow-hidden rounded-2xl sm:h-[132px] sm:w-[165px]">
            <img
              src={produto.imagem}
              alt={produto.nome}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* INFORMAÇÕES */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* NOME E ETIQUETA */}
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="min-w-0 flex-1 text-lg font-extrabold leading-snug tracking-tight sm:text-xl">
                {produto.nome}
              </h3>

              <span className="shrink-0 rounded-full border border-orange-100 bg-[#FFF8F0] px-4 py-2 text-xs font-semibold text-orange-700">
                {produto.etiqueta}
              </span>
            </div>

            {/* DESCRIÇÃO */}
            <p className="mt-2 text-sm leading-6 text-[#625A54] sm:text-base">
              {produto.descricao}
            </p>

            {/* PREÇO E BOTÃO */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-2xl font-serif font-extrabold text-orange-600">
                {produto.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>

              <button
                type="button"
                onClick={() =>
                  console.log("Adicionar ao pedido:", produto.nome)
                }
                className="rounded-xl border border-[#E9E0D7] bg-white px-5 py-3 text-sm font-bold text-[#241B16] transition hover:border-orange-500 hover:bg-orange-50"
              >
                + Adicionar
              </button>
            </div>
          </div>
        </article>
      ))}
  </div>
    </div>
  );
}
