// ---------------------------------------------------------------
// Aula 20 – Polimento Profissional e o Fim da Jornada
// ---------------------------------------------------------------

// 📚 CONCEITO 1: A Dor de Formatar Dinheiro
// ---------------------------------------------------------------
// Formatar dinheiro no Brasil é complicado. Usamos ponto no milhar e vírgula no centavo.
// R$ 1.500,25. 
// O computador (que é americano) entende 1500.25.
//
// Fazer gambiarras como: "R$ " + valor.toFixed(2).replace('.', ',') até funciona, 
// mas quebra se o número for muito grande (milhões).

// A Solução Profissional: A API Nativa do JavaScript!


// 📚 CONCEITO 2: Intl.NumberFormat
// ---------------------------------------------------------------
// O JS moderno já tem uma ferramenta imbutida chamada "Intl" (Internacionalização).
// Você cria um "Formatador" dizendo o país (pt-BR) e a moeda (BRL).

// 1. Cria a "Máquina" de formatar (Fazemos isso só 1x no topo do arquivo):
const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency', // Estilo de moeda
    currency: 'BRL'    // Sigla do Real Brasileiro
});

// 2. Usando a máquina:
const numeroCru = 12341250.5;
const numeroLindo = formatadorMoeda.format(numeroCru);

console.log(numeroLindo); // Saída exata: R$ 1.250,50


// 🎓 CONCEITO EXTRA: Por que focar nos Fundamentos? 
// ---------------------------------------------------------------
// Você acabou de construir um sistema que adiciona, lista, edita (comparações),
// deleta e salva dados.
// Isso no mercado de trabalho se chama C.R.U.D (Create, Read, Update, Delete).
//
// Não importa se no futuro você usar TypeScript, React, Python ou C#... 
// 90% dos aplicativos do mundo são apenas um CRUD mascarado (Instagram é um CRUD de fotos, 
// Nubank é um CRUD de dinheiro). 
// Dominar essa lógica de Array e Objetos é o verdadeiro superpoder!


// ---------------------------------------------------------------
// 🏋️ MINI-DESAFIO (20 min) - "Calculadora de Descontos"
// ---------------------------------------------------------------
// Objetivo: Receber um preço, aplicar um % de desconto e mostrar formatado em R$.
//
// GUIA LÓGICO (Traduza cada passo abaixo para JavaScript):
//
// 1. Prepare a ferramenta que formata números para o padrão de moeda do Brasil.
// 2. Busque os elementos necessários do HTML (inputs, botão e local do resultado).
// 3. Fique "ouvindo" o clique do botão de calcular.
//
// 4. QUANDO O CLIQUE ACONTECER:
//    a) Pegue os valores que o usuário digitou (lembre-se de garantir que sejam números!).
//    b) Faça a matemática: calcule qual será o preço final com o desconto aplicado.
//    c) Use a ferramenta do passo 1 para formatar esse preço final.
//    d) Mostre o resultado formatado na tela para o usuário ver.
// ---------------------------------------------------------------
