// ---------------------------------------------------------------
// Aula 13 – O Despertar da Página (DOM e Eventos)
// ---------------------------------------------------------------

// 📚 CONCEITO 1: O Que é o DOM? (Document Object Model)
// ---------------------------------------------------------------
// O navegador não lê o HTML como texto solto. Ele cria uma "Árvore Genealógica" na memória.
// Cada tag (<h1>, <button>, <div>) vira um OBJETO que o JavaScript pode controlar.
// A palavra-chave 'document' é a porta de entrada para essa árvore.

// Selecionando elementos (O "Gancho"):
// Precisamos "segurar" o elemento pelo ID antes de mandar ele fazer algo.
const titulo = document.getElementById("titulo-principal");

// Agora que "segurei" o título numa variável, posso mudá-lo:
// titulo.innerText = "Mudei o texto via JS!";
// titulo.style.color = "red";


// 📚 CONCEITO 2: Eventos e Listeners (Ouvintes)
// ---------------------------------------------------------------
// Um site estático é chato. O JavaScript serve para REAGIR ao usuário.
// Um "Listener" é como um porteiro esperando um sinal específico.

const botao = document.getElementById("meu-botao");

// Função que será executada APENAS quando o evento ocorrer
function reagirAoClique() {
    alert("Você clicou no botão!");
    titulo.style.color = "blue"; // O JS muda o CSS dinamicamente
}

// Configurando o "Porteiro" (Listener):
// 1. Quem vigiar? (botao)
// 2. O que vigiar? ("click")
// 3. O que fazer? (reagirAoClique) -> Note que não usamos () aqui!
botao.addEventListener("click", reagirAoClique);


// ---------------------------------------------------------------
// 🏋️ MINI-DESAFIO - "A Lâmpada"
// ---------------------------------------------------------------
// Objetivo: Criar um botão que acende e apaga a luz (fundo da página).

// 1. No HTML, crie um <h1 id="status">Escuro</h1> e um <button id="btn-luz">Interruptor</button>.
// 2. No JS, pegue esses elementos pelo ID.
// 3. Crie uma variável de estado: `let acesa = false;`.
// 4. Adicione um evento de clique. Se `acesa` for falso, mude o fundo para amarelo e o texto para "Acesa".
// 5. Se já estiver acesa, mude o fundo para branco e o texto para "Escuro".