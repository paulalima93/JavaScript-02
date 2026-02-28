// ---------------------------------------------------------------
// Aula 19 – LocalStorage e JSON (Salvando os Dados)
// ---------------------------------------------------------------

// 📚 CONCEITO 1: A Amnésia da Memória RAM
// ---------------------------------------------------------------
// Variáveis do JavaScript vivem na Memória RAM do computador.
// Quando o usuário aperta F5 (Recarregar), o navegador "mata" o JS e começa de novo.
// O LocalStorage é como um HD minúsculo que o navegador te empresta. Ele sobrevive ao F5.


// 📚 CONCEITO 2: JSON (O Tradutor Universal)
// ---------------------------------------------------------------
// O LocalStorage tem um defeito grave: Ele é analfabeto para Arrays e Objetos.
// Ele SÓ entende texto puro (String).
// Se tentarmos forçar a barra: localStorage.setItem("dados", [1, 2, 3]), ele quebra a formatação.

// Analogia da Viagem Espacial (Comida Desidratada):
// Você não pode mandar um prato de feijoada (Objeto/Array) pro espaço. Você precisa desidratá-lo
// (virar pó) para caber na nave. Quando chegar lá, você hidrata com água para voltar a ser comida.



let meusDados = [{ nome: "Paula" }];

// 1. Desidratar (Converter Array para Texto) -> JSON.stringify()
const textoParaSalvar = JSON.stringify(meusDados);
// Fica assim: '[{"nome":"Paula"}]' (É apenas um texto agora)

// 2. Hidratar (Converter Texto de volta para Array) -> JSON.parse()
const dadosRecuperados = JSON.parse(textoParaSalvar);
// Volta a ser Objeto manipulável pelo JS!


// 📚 CONCEITO 3: O Fluxo de Vida do App Profissional
// ---------------------------------------------------------------
// Todo sistema que salva dados segue esta rotina (Anotar para a vida):
// 
// 1º passo do código: TENTAR CARREGAR. Tem algo salvo? 
//    Se sim, hidrata e joga no array principal. Se não, começa com array vazio [].
//
// 2º passo: AÇÃO DO USUÁRIO. O usuário adicionou ou apagou algo?
//
// 3º passo: SALVAR. Pega o array atualizado, desidrata (stringify) e salva no LocalStorage.


// ---------------------------------------------------------------
// 🏋️ MINI-DESAFIO (15 min) - "Bloco de Notas Imortal"
// ---------------------------------------------------------------
// Objetivo: Um campo de texto que não perde o que foi digitado se fechar a aba.

// 1. HTML: Um <textarea id="nota"> e um <button id="salvar">.
// 2. JS - Passo 1 (Carregar): Assim que o JS abrir, puxe o localStorage.getItem("minha_nota"). 
//    Se existir, coloque dentro do textarea.value.
// 3. JS - Passo 2 (Salvar): Ao clicar no botão, pegue o textarea.value e salve no
//    localStorage.setItem("minha_nota", valor).
// 4. Teste escrevendo algo, clicando em salvar e dando F5!