// ---------------------------------------------------------------
// Aula 17 – Removendo Itens (Manipulação de Array e DOM)
// ---------------------------------------------------------------

// 📚 CONCEITO 1: A Lógica da Exclusão Moderna (.filter)
// ---------------------------------------------------------------
// Antigamente, usávamos .splice() para cortar um item do array.
// Hoje, em frameworks modernos (React, Vue), preferimos a IMUTABILIDADE.
// Não "deletamos" o item. Nós criamos uma NOVA LISTA sem aquele item.

// Analogia do Filtro de Café:
// O .filter() passa todos os itens por uma peneira.
// A regra é: "Quem retornar TRUE continua na lista. Quem retornar FALSE fica de fora."

let numeros = [10, 20, 50, 80];

// Objetivo: Remover o 50.
// Regra do filtro: "Deixe passar todo mundo que SEJA DIFERENTE de 50".

const novaLista = numeros.filter(numero => {
    return numero !== 50; // 10 é diferente? Sim (Passa). 50 é diferente? Não (Bloqueado).
});

// console.log(novaLista); // [10, 20, 80]
// console.log(numeros);   // [10, 20, 50, 80] (O original não muda!)

// Para atualizar a lista original, fazemos a substituição:
numeros = novaLista; 


// 📚 CONCEITO 2: Por que usamos ID e não o Índice?
// ---------------------------------------------------------------
// Imagine deletar pelo índice (posição 2).
// Se a lista for reordenada, a posição 2 muda e você apaga a pessoa errada.
// Por isso, todo dado importante tem um ID ÚNICO.

const usuarios = [
    { id: 101, nome: "Ana" },
    { id: 102, nome: "João" },
    { id: 103, nome: "Ana" } // Outra Ana! Se apagar por nome, apaga as duas.
];

// Para apagar o João (ID 102):
const usuariosAtualizados = usuarios.filter(user => user.id !== 102);




// 📚 CONCEITO 3: O Ciclo de Vida da Exclusão (O "Refresh")
// ---------------------------------------------------------------
// Como a tela sabe que o item sumiu? Ela não sabe.
// Precisamos avisá-la. O ciclo é sempre este:

// 1. O usuário clica no botão "X" (HTML).
// 2. O JavaScript remove o item do Array de dados (Lógica).
// 3. O JavaScript limpa a tela inteira (innerHTML = "").
// 4. O JavaScript redesenha a lista baseada no novo Array (Renderização).

// Parece trabalhoso apagar tudo e desenhar de novo?
// Para o computador, isso leva milissegundos. É a forma mais segura de evitar bugs visuais.


// ---------------------------------------------------------------
// ⚔️ EXEMPLO PRÁTICO: Conectando o Botão ao ID
// ---------------------------------------------------------------

// No HTML, criamos o botão dinamicamente injetando o ID dentro da função:
// <button onclick="deletar(102)"> Apagar </button>

// Função que recebe o ID de quem foi clicado
function deletar(idParaRemover) {
    console.log("O usuário quer apagar o item de ID:", idParaRemover);
    // Aqui viria a lógica do filter...
}


// ---------------------------------------------------------------
// 🏋️ MINI-DESAFIO (15 min) - "Correio Anti-Spam"
// ---------------------------------------------------------------
// Objetivo: Criar uma lista de emails onde você pode excluir os indesejados.

// 1. Crie um array `emails`:
//    [{id: 1, msg: "Oi sumida"}, {id: 2, msg: "Ganhe dinheiro fácil"}, {id: 3, msg: "Trabalho"}]
// 2. Crie uma função `renderizar()` que limpa a <ul> e mostra os emails.
// 3. Ao lado de cada email, crie um botão HTML: <button onclick="apagar(ID_AQUI)">X</button>
// 4. Crie a função `apagar(id)` que filtra o array e chama `renderizar()` de novo.