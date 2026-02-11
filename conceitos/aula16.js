// ---------------------------------------------------------------
// Aula 16 – Arrays de Objetos (Mudança de Paradigma)
// ---------------------------------------------------------------

// 📚 CONCEITO 1: O HTML é Burro, o Array é Inteligente
// ---------------------------------------------------------------
// Até agora, confiávamos no HTML para guardar a informação. Isso é frágil.
// Se atualizarmos a página, tudo some. Se precisarmos somar, é difícil ler do HTML.
// A Solução: Guardar tudo em variáveis na memória (Array).

// O Array vira a "Fonte da Verdade". O HTML vira apenas um "Espelho".


// 📚 CONCEITO 2: Objetos Literais (Agrupando Dados)
// ---------------------------------------------------------------
// Em vez de ter um array só de nomes e outro só de preços, criamos objetos.
// É como uma ficha de cadastro.

const transacao = {
    id: 12345,        // Identificador único
    descricao: "Luz", // O quê?
    valor: -100       // Quanto?
};

let listaTransacoes = []; // Nosso banco de dados local
listaTransacoes.push(transacao);


// 📚 CONCEITO 3: O Loop de Renderização (Apaga e Desenha)
// ---------------------------------------------------------------
// Para mostrar os dados na tela, usamos uma técnica poderosa:
// 1. Apagamos a lista HTML inteira (innerHTML = "").
// 2. Percorremos o Array item por item.
// 3. Recriamos o HTML de cada item.

// Por que apagar tudo?
// Para evitar duplicidade. Se não apagarmos, ao adicionar o item 5,
// ele mostraria: 1, 2, 3, 4, 1, 2, 3, 4, 5.

function renderizar() {
    const ul = document.getElementById("lista");
    ul.innerHTML = ""; // Limpeza da lousa

    listaTransacoes.forEach(item => {
        // Recriação baseada nos dados
        ul.innerHTML += `<li>${item.descricao}: R$ ${item.valor}</li>`;
    });
}


// ---------------------------------------------------------------
// 🏋️ MINI-DESAFIO - "Lista de Tarefas (Array)"
// ---------------------------------------------------------------
// Objetivo: Criar uma lista onde os dados ficam salvos num array.

// 1. Crie um array vazio `tarefas = []`.
// 2. Ao clicar em "Adicionar", dê um `.push()` do texto do input no array.
// 3. Chame a função `renderizar()`.
// 4. A função `renderizar()` deve limpar a <ul> e fazer um loop `forEach` no array para desenhar as `<li>`.