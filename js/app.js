/*
let tipoIngresso = document.querySelector('#tipo-ingresso');//ok


let quantidadePista = document.getElementById('qtd-pista').innerHTML;
let quantidadeSuperior = document.getElementById('qtd-superior').innerHTML;
let quantidadeInferior = document.getElementById('qtd-inferior').textContent;

function comprar() {
    let quantidadeCompra = document.getElementById('qtd').value;

    if (tipoIngresso.value === 'inferior') {
        const vendendoIngressoInferior = quantidadeInferior - quantidadeCompra;
        document.getElementById('qtd-inferior').textContent = `${vendendoIngressoInferior}`
    }

    if (tipoIngresso.value === 'superior') {
        const vendendoIngressoSuperior = quantidadeSuperior - quantidadeCompra;
        document.getElementById('qtd-superior').innerHTML = `${vendendoIngressoSuperior}`
    }

    if (tipoIngresso.value === 'pista') {
        const vendendoIngressoPista = quantidadePista - quantidadeCompra;
        document.getElementById('qtd-pista').innerHTML = `${vendendoIngressoPista}`
    }

    disponibilidadeIngresso()
}

function disponibilidadeIngresso(){

    if (quantidadeInferior === 0) {
        document.getElementById('qtd-inferior').textContent = 'Indispónivel'
}
}

*/

// RESOLUÇÃO DO PROFESSOR

function comprar() {

    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = document.getElementById('qtd').value;

    if (tipo === 'pista') {
        comprarPista(qtd);
    }

    if (tipo === 'superior') {
        comprarSuperior(qtd);
    }

    if (tipo === 'inferior') {
        comprarInferior(qtd);
    }
}

function comprarPista(qtdValorVindoDaFunctionComprar) {

    let qtdPistaDisponivel = parseInt(document.getElementById('qtd-pista').innerHTML);

    if (qtdValorVindoDaFunctionComprar > qtdPistaDisponivel) {
        alert('Quantidade Indisponível, Verifique a Quantidade disponível.')
    } else {
        alert('Compra Realizada com Sucesso!')
        let calculoCompraIngresso = qtdPistaDisponivel - qtdValorVindoDaFunctionComprar;
        document.getElementById('qtd-pista').innerText = `${calculoCompraIngresso}`
        VerificarPistaZerouIngresso(document.getElementById('qtd-pista').innerText)
    }

    
}

function comprarSuperior(qtdValorVindoDaFunctionComprar) {
    let qtdSuperiorDisponivel = parseInt(document.getElementById('qtd-superior').innerHTML);

    if (qtdValorVindoDaFunctionComprar > qtdSuperiorDisponivel) {
        alert('Quantidade Indisponível, Verifique a Quantidade disponível.')
    } else {
        alert('Compra Realizada com Sucesso!')
        let calculoCompraIngresso = qtdSuperiorDisponivel - qtdValorVindoDaFunctionComprar;
        document.getElementById('qtd-superior').innerText = `${calculoCompraIngresso}`
        VerificarSuperiorZerouIngresso(document.getElementById('qtd-superior').innerText);
    }
}

function comprarInferior(qtdValorVindoDaFunctionComprar) {
    let qtdInferiorDisponivel = parseInt(document.getElementById('qtd-inferior').innerHTML);

    if (qtdValorVindoDaFunctionComprar > qtdInferiorDisponivel) {
        alert('Quantidade Indisponível, Verifique a Quantidade disponível.')
    } else {
        alert('Compra Realizada com Sucesso!')
        let calculoCompraIngresso = qtdInferiorDisponivel - qtdValorVindoDaFunctionComprar;
        document.getElementById('qtd-inferior').innerText = `${calculoCompraIngresso}`
        VerificarInferiorZerouIngresso(document.getElementById('qtd-inferior').innerText);
    }
}

function VerificarPistaZerouIngresso(PistaDisponivel) {
    if (PistaDisponivel === '0') {
        document.getElementById('qtd-pista').innerText = 'indisponível';
        document.getElementById('qtd-pista').style.color = 'red';
    }
}

function VerificarSuperiorZerouIngresso(SuperiorDisponivel) {
    if (SuperiorDisponivel === '0') {
        document.getElementById('qtd-superior').innerText = 'indisponível';
        document.getElementById('qtd-superior').style.color = 'red';
    }
}

function VerificarInferiorZerouIngresso(InferiorDisponivel) {
    if (InferiorDisponivel === '0') {
        document.getElementById('qtd-inferior').innerText = 'indisponível';
        document.getElementById('qtd-inferior').style.color = 'red';
    }
}













