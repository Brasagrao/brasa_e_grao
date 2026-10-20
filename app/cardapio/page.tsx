"use client";

import { useState } from "react";

const categorias = [
  { nome: "Todos os Itens", icone: "🍔", quantidade: 10 },
  { nome: "Smash Burgers", icone: "🔥", quantidade: 4 },
  { nome: "Porções & Entradas", icone: "🍟", quantidade: 3 },
  { nome: "Cafés & Shakes", icone: "☕", quantidade: 3 },
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

          
    </div>
  );
}
