// ---------------------------------------------------------------
// Aula 14 – Capturando Dados e Escrevendo na Tela
// ---------------------------------------------------------------

// 📚 CONCEITO 1: A Diferença Vital (.innerText vs .value)
// ---------------------------------------------------------------
// Muitos iniciantes travam aqui. A regra é simples:

// A. Caixas Fechadas (Inputs):
// O texto não faz parte do corpo da tag, é um atributo interno.
// USAMOS: .value
const entrada = document.getElementById("campo-nome");
// console.log(entrada.value); // O que o usuário digitou

// B. Textos Abertos (h1, p, span, div, li):
// O texto é o recheio da tag.
// USAMOS: .innerText
const titulo = document.getElementById("titulo");
// console.log(titulo.innerText); // O texto que está na tela


// 📚 CONCEITO 2: Template Strings (A Crase Mágica)
// ---------------------------------------------------------------
// Antigamente, concatenar texto era ruim: "Olá " + nome + ", tudo bem?";
// Hoje usamos crase (backticks) `` e ${} para injetar variáveis.

let nome = "Ana";
let frase = `Olá ${nome}, tudo bem com você?`;


// 📚 CONCEITO 3: Injeção de HTML (.innerHTML +=)
// ---------------------------------------------------------------
// Podemos escrever código HTML dentro da página usando JS.
// O operador += é fundamental aqui.

const lista = document.getElementById("lista-nomes");

function adicionar() {
    // 1. Pega o valor
    const nomeDigitado = entrada.value;
    
    if (nomeDigitado === "") return; // Validação simples

    // 2. Injeta HTML no final da lista
    // Se usássemos apenas =, ele apagaria tudo antes de escrever.
    // O += mantém o que já existe e adiciona o novo.
    lista.innerHTML += `<li>${nomeDigitado}</li>`;
    
    // 3. Limpeza (UX)
    entrada.value = ""; 
}


// ---------------------------------------------------------------
// 🏋️ MINI-DESAFIO - "Mural de Recados"
// ---------------------------------------------------------------
// Objetivo: Um chat simples de uma via.

// 1. HTML: Input de texto, Botão "Postar", Div vazia com id="mural".
// 2. JS: Ao clicar no botão, pegue o texto do input.
// 3. Use `mural.innerHTML +=` para adicionar um parágrafo <p> com o recado.
// 4. Use negrito <b> dentro do template string para destacar a palavra "Recado:".