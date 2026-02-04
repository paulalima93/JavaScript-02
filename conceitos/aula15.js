// aula15-conceito.js

// ----------------------------------------
// 1. Strings vs Números
// ----------------------------------------
const input = document.getElementById("idade");
// O .value SEMPRE devolve texto. "10" + "10" = "1010".
// Precisamos converter: Number("input.value")

// ----------------------------------------
// 2. Radio Buttons e Checkboxes (.checked)
// ----------------------------------------
// Para saber se uma bolinha ou caixa está marcada, usamos .checked
// Retorna true ou false.

const checkModoEscuro = document.getElementById("modo-escuro");

if (checkModoEscuro.checked) {
    console.log("O usuário quer modo escuro!");
}

// ----------------------------------------
// 3. Estilização Dinâmica (classList)
// ----------------------------------------
// O ideal é adicionar/remover classes CSS predefinidas.
const caixa = document.getElementById("caixa");
// caixa.classList.add("sucesso");

// ----------------------------------------
// 🏋️ MINI-DESAFIO (15 min) - "Dark Mode"
// ----------------------------------------
// 1. Crie um <input type="checkbox" id="tema">.
// 2. Ao mudar (evento 'change'), verifique se está marcado.
// 3. Se estiver marcado, mude o fundo do body para preto e texto para branco.
// 4. Se desmarcar, volte ao normal.