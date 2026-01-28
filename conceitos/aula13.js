// aula13

// 1. O DOM e Seletores
// O JavaScript precisa "buscar" o elemento no HTML para controlá-lo.
const titulo = document.getElementById("titulo-principal");
// titulo.innerText = "Mudei o texto via JS!";

// 2. Eventos (Click)
const botao = document.getElementById("meu-botao");

function clicou() {
    alert("Você clicou!");
    titulo.style.color = "blue"; // Mudança direta de estilo
}

// O "Ouvinte" (Listener)
botao.addEventListener("click", clicou);

// ----------------------------------------
// 🏋️ MINI-DESAFIO (10 min) - "Lâmpada"
// ----------------------------------------
// Crie um botão "Ligar/Desligar".
// Ao clicar, mude o fundo do site (document.body.style.backgroundColor) para amarelo.