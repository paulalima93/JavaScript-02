// aula16-conceito.js

// ----------------------------------------
// 1. O Problema do innerHTML +=
// ----------------------------------------
// Ficar remendando HTML é ruim. Vamos focar nos DADOS.

// ----------------------------------------
// 2. Array de Objetos (Fonte da Verdade)
// ----------------------------------------
let listaDeConvidados = [
    { nome: "Paula", vip: true },
    { nome: "João", vip: false }
];

// ----------------------------------------
// 3. Renderização (Loop)
// ----------------------------------------
// Função que limpa a tela e desenha tudo baseada no Array.
function renderizar() {
    const lista = document.getElementById("lista");
    lista.innerHTML = ""; // 1. Limpa tudo

    // 2. Reconstrói baseado nos dados
    listaDeConvidados.forEach(pessoa => {
        lista.innerHTML += `<li>${pessoa.nome}</li>`;
    });
}

// ----------------------------------------
// 🏋️ MINI-DESAFIO (20 min) - "Lista de Tarefas Simples"
// ----------------------------------------
// 1. Crie um array vazio `tarefas = []`.
// 2. Input + Botão. Ao clicar, dá .push() no array (guardando só o texto).
// 3. Chame uma função `renderizar()` que limpa a <ul> e faz um forEach para mostrar os itens.