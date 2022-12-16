function aplicarDesconto (valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros (valor, juros) {
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaDePagamento = 1;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10) + 'R$');
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15) + 'R$');
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta + 'R$');
} else {
    console.log(aplicarJuros(precoEtiqueta, 10) + 'R$');
}


 function incrementarJuros(valor, percentualDeJuros) {
        const incremento = (percentualDeJuros / 100) * valor;
        return valor + incremento;
    }

    incrementarJuros(100,10);