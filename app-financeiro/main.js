const btnAdicionar = document.getElementById('btn-adicionar');
const saldo = document.getElementById('texto-saldo');

function teste(){
    alert('Saldo alterado!');
    saldo.innerText = 'R$ 5.000,00'
}

btnAdicionar.addEventListener('click', teste)