// ---------------------------------------------------------------
// Aula 18 – Filtros Visuais (Manipulando a Visão, não o Dado)
// ---------------------------------------------------------------

// 📚 CONCEITO 1: Filtro Destrutivo vs. Filtro Visual
// ---------------------------------------------------------------
// Na Aula 17, usamos o .filter() para DELETAR itens. Nós sobrescrevíamos 
// a variável principal (transacoes = transacoes.filter...). Isso é o Filtro Destrutivo.
//
// Hoje, o .filter() será usado apenas como um "Óculos de Sol".
// O óculos muda como você vê o mundo (deixa tudo escuro), mas não apaga o sol de verdade.

// A Regra de Ouro:
// NUNCA sobrescreva o Array original (o "Banco de Dados") ao fazer um filtro visual!
// Crie uma variável temporária apenas para a hora de desenhar na tela.



let transacoesBanco = [100, -50, 200, -20];

// Se eu quiser ver apenas as receitas (positivos):
// ERRADO: transacoesBanco = transacoesBanco.filter(...) -> Perdi as despesas para sempre!
// CERTO:
const apenasReceitas = transacoesBanco.filter(valor => valor > 0);
// console.log(apenasReceitas); // [100, 200]
// console.log(transacoesBanco); // [100, -50, 200, -20] (Intacto!)


// 📚 CONCEITO 2: Passando Parâmetros Mágicos no HTML
// ---------------------------------------------------------------
// Como o JS sabe qual botão de filtro o usuário clicou?
// Nós passamos um "argumento" (uma palavra) direto no HTML.
// Exemplo: <button onclick="filtrarLista('despesas')">Saídas</button>

// Função que recebe a palavra e decide o que fazer:
function filtrarLista(tipo) {
    let listaProvisoria = transacoesBanco; // Por padrão, a provisória é igual a original (Mostra Tudo)

    if (tipo === 'receitas') {
        listaProvisoria = transacoesBanco.filter(item => item > 0);
    } 
    if (tipo === 'despesas') {
        listaProvisoria = transacoesBanco.filter(item => item < 0);
    }

    // Só no final, mandamos a listaProvisoria para a função que desenha o HTML
    // renderizar(listaProvisoria);
}


// ---------------------------------------------------------------
// 🏋️ MINI-DESAFIO (15 min) - "Loja de Roupas"
// ---------------------------------------------------------------
// Objetivo: Filtrar uma vitrine de loja por cor, sem apagar as outras roupas do estoque.

// 1. Crie um array `roupas`: 
//    [{peca: "Camisa", cor: "azul"}, {peca: "Calça", cor: "preta"}, {peca: "Boné", cor: "azul"}]
// 2. Crie 2 botões no HTML: "Ver Tudo" e "Só Azul".
// 3. No HTML, use onclick="filtrar('tudo')" e onclick="filtrar('azul')".
// 4. No JS, crie a função `filtrar(corSolicitada)`.
// 5. Se a cor for 'tudo', desenhe a lista inteira. Se for 'azul', filtre e desenhe só os azuis.