// aula14-conceito.js

// 1. .value vs .innerText
// Inputs usam .value. Tags normais (h1, p) usam .innerText.
const entrada = document.getElementById("campo-nome");
// console.log(entrada.value);

// 2. Template Strings e innerHTML
const lista = document.getElementById("lista-nomes");

function adicionar() {
    const nome = entrada.value;
    if (nome === "") return; // Validação simples

    // Injeta HTML mantendo o anterior (+=)
    lista.innerHTML += `<li>${nome}</li>`;
    
    entrada.value = ""; // Limpa campo
}

// ----------------------------------------
// 🏋️ MINI-DESAFIO (15 min) - "Mural de Recados"
// ----------------------------------------
// Crie um input "Recado" e um botão.
// Ao clicar, adicione o recado em uma <div id="mural"> dentro de um <p> negrito.