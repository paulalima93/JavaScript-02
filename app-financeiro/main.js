const btnAdicionar = document.getElementById('btn-adicionar');
const saldo = document.getElementById('texto-saldo');
const inputDesc = document.getElementById('descricao');
const inputValue = document.getElementById('valor');
const listTransacoes = document.getElementById('lista-transacoes');

function adicionarTransacao(){
    let desc = inputDesc.value;
    let value = inputValue.value;

    listTransacoes.innerHTML = `
    <li>
        <p>${desc}</p>
        <p>R$ ${value}</p>
    </li>
    `
    saldo.innerText = value;
    
    inputDesc = "";
    inputValue = "";
    
}

function teste(){
    alert('Saldo alterado!');
    saldo.innerText = 'R$ 5.000,00'
}

btnAdicionar.addEventListener('click', adicionarTransacao)

