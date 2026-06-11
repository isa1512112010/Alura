function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
     let qtd = document.getElementById('qtd');

     if (tipo.value == 'pista') {
        comprarPista(qtd.value);
     }

     if (tipo.value == 'inferior') {
        comprarInferior(qtd.value);
     }

     if (tipo.value == 'superior') {
        comprarSuperior(qtd.value);
     }

}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd >qtdPista) {
        alert('Quantidade indisponivel para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('compra realizada com sucesso!');
    }
}


function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd >qtdInferior) {
        alert('Quantidade indisponivel para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('compra realizada com sucesso!');
    }
}


function comprarSuperior(qtd) {
    let qtdSuperior= parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd >qtdSuperior) {
        alert('Quantidade indisponivel para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('compra realizada com sucesso!');
    }
}