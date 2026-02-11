// ---------------------------------------------------------------
// Aula 15 – Lógica Matemática e Experiência do Usuário (UX)
// ---------------------------------------------------------------

// 📚 CONCEITO 1: O "Buraco" da Matemática com Strings
// ---------------------------------------------------------------
// Todo input HTML retorna uma STRING (Texto), mesmo sendo type="number".
// "10" + "10" = "1010" (Concatenação, não soma).

// Solução: Sempre converter antes de calcular.
const valorTexto = "50";
const valorNumero = Number(valorTexto); // Agora é 50 matemático.


// 📚 CONCEITO 2: Math.abs() (O "Lava-Jato" de Números)
// ---------------------------------------------------------------
// O usuário é imprevisível. Em um sistema financeiro, se ele digitar "-50"
// e marcarmos "Saída" (que multiplica por -1), teremos +50 (Entrada errada!).
// O Math.abs() remove qualquer sinal e deixa o número "neutro" (absoluto).

// Math.abs(-50) -> 50
// Math.abs(50)  -> 50
// Assim, nós (programadores) controlamos o sinal depois, sem surpresas.


// 📚 CONCEITO 3: Checkbox e Radio Buttons (.checked)
// ---------------------------------------------------------------
// Não lemos o .value desses botões. Perguntamos "Está marcado?".
// A propriedade .checked retorna verdadeiro (true) ou falso (false).

const checkModoEscuro = document.getElementById("tema");

if (checkModoEscuro.checked) {
    // Está marcado!
}


// 📚 CONCEITO 4: Classes CSS Dinâmicas (.classList)
// ---------------------------------------------------------------
// Nunca escreva muito CSS dentro do JS (ex: style.backgroundColor = 'red'...).
// O jeito profissional é ter uma classe CSS pronta (.erro, .sucesso, .escuro)
// e o JS apenas cola ou remove essa etiqueta no elemento.

// elemento.classList.add("minha-classe");
// elemento.classList.remove("minha-classe");


// ---------------------------------------------------------------
// 🏋️ MINI-DESAFIO - "Modo Escuro (Checkbox)"
// ---------------------------------------------------------------
// Objetivo: Um interruptor de luz usando Checkbox.

// 1. HTML: <input type="checkbox" id="tema"> Ativar Modo Escuro.
// 2. CSS: Crie uma classe `.modo-escuro` com background preto e letra branca.
// 3. JS: Adicione um evento 'change' (mudança) no checkbox.
// 4. Se `.checked` for true, adicione a classe no body. Se false, remova.