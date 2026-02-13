# 🚀 Desafios de JavaScript: Manipulação de DOM e Lógica

Contém 5 micro-projetos desenvolvidos para consolidar os conhecimentos de **Manipulação de DOM**, **Eventos**, **Arrays** e **Lógica de Programação** em JavaScript.

## 📋 Os Desafios

### 1. 🔥 Jogo de Adivinhação (Quente ou Frio)
O computador sorteia um número e o usuário deve adivinhar. O sistema dá dicas e mantém um histórico de tentativas.
* **Lógica Principal:** Geração de números aleatórios, comparação de valores e manipulação de Arrays para histórico.
* **Algoritmo:**
    1. Gerar número secreto (1 a 100).
    2. Capturar palpite do usuário.
    3. Validar e armazenar o chute em um Array.
    4. Comparar: se igual (ganhou), se maior (alto), se menor (baixo).
    5. Atualizar a tela com a dica e a lista de tentativas.

### 2. ⏳ Cronômetro para o Ano Novo
Uma contagem regressiva em tempo real que mostra quanto tempo falta para a virada do ano.
* **Lógica Principal:** Objeto `Date`, cálculos matemáticos de tempo e `setInterval`.
* **Algoritmo:**
    1. Definir a data alvo (1º de Janeiro).
    2. Calcular a diferença entre "agora" e o alvo em milissegundos.
    3. Converter milissegundos em: Dias, Horas, Minutos e Segundos.
    4. Atualizar o HTML a cada 1 segundo (1000ms).

### 3. ✨ Gerador de Frases Motivacionais
Um botão que sorteia mensagens de inspiração aleatórias.
* **Lógica Principal:** Sorteio de índices em Arrays.
* **Algoritmo:**
    1. Criar uma lista (Array) de frases.
    2. Ao clicar no botão, gerar um índice aleatório baseado no tamanho da lista.
    3. Exibir a frase correspondente ao índice sorteado no elemento de texto.

### 4. 🚦 Semáforo Inteligente
Simulador de sinal de trânsito que alterna entre as cores ao clique de um botão.
* **Lógica Principal:** Controle de estados (flags) e manipulação de classes CSS.
* **Algoritmo:**
    1. Mapear as luzes e o botão no DOM.
    2. Criar uma variável de controle de estado (0, 1, 2).
    3. Ao clicar, resetar todas as cores.
    4. Incrementar o estado e aplicar a classe CSS da cor correta (Verde -> Amarelo -> Vermelho).

### 5. 💵 Conversor de Moedas (R$ para US$)
Ferramenta simples para converter valores baseada em uma cotação fixa.
* **Lógica Principal:** Operações aritméticas e formatação de números.
* **Algoritmo:**
    1. Capturar o valor em Reais via input.
    2. Dividir o valor pela cotação atual.
    3. Formatar o resultado usando `Intl.NumberFormat` para o padrão de moeda (USD).
    4. Exibir o resultado final na tela.

---
