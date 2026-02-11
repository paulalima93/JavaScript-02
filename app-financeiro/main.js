const btnAdicionar = document.getElementById('btn-adicionar');
const saldo = document.getElementById('texto-saldo');
const inputDesc = document.getElementById('descricao');
const inputValue = document.getElementById('valor');
const listTransacoes = document.getElementById('lista-transacoes');
const radioSaida = document.getElementById('radio-saida');
let transacoes = [];

function adicionarTransacao(){
    let desc = inputDesc.value;
    let value = inputValue.value;
    let valueAbs = Math.abs(Number(value));
    if(radioSaida.checked){
        valueAbs = valueAbs * -1
    }
    
    const novaTransacao = {
        id:Math.random(),
        descricao:desc,
        finalValue:valueAbs
    }
    
    transacoes.push(novaTransacao)
    console.log(transacoes);

    atualizarTela()
    inputDesc = "";
    inputValue = "";
}

function atualizarTela(){
    let totalBalance = 0;
    listTransacoes.innerHTML = ""

    transacoes.forEach(item =>{
        listTransacoes.innerHTML += `
    <li>
        <p>${item.descricao}</p>
        <p>R$ ${Math.abs(item.finalValue.toFixed(2))}</p>
    </li>`
    totalBalance += item.finalValue
    })

    saldo.innerText = `R$ ${totalBalance.toFixed(2)}`
}

function teste(){
    alert('Saldo alterado!');
    saldo.innerText = 'R$ 5.000,00'
}

btnAdicionar.addEventListener('click', adicionarTransacao)


