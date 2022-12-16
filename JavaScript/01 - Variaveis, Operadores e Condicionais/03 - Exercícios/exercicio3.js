const precoEtiqueta = 100;
const condicaoPagamento = 1;

/*
1 - à vista Débito, 10% de desconto;
2 - à vista no Dinheiro ou PIX, 15% de desconto;
3 - 2x no cartão, preço normal sem juros;
4 - acima de 2x, preço normal com juros de 10%; */

switch(condicaoPagamento) {
    case 1:
        console.log('A condição de Pagamento é à vista no Débito e o valor ficou: ' + (precoEtiqueta - (precoEtiqueta * 0.10)) + 'R$');
        break;
    case 2: 
        console.log('A condição de Pagamento é à vista no Dinheiro ou PIX e o valor ficou: ' + (precoEtiqueta - (precoEtiqueta * 0.15)) + 'R$');
        break;
    case 3:
        console.log('A condição de Pagamento é em duas vezes no cartão e o valor ficou: ' + precoEtiqueta + 'R$')
        break;
    case 4:
        console.log('A condição de Pagamento é acima de duas vezes no cartão e o valor ficou: ' + (precoEtiqueta + (precoEtiqueta * 0.10)) + 'R$');
        break;
    default:
        console.log('Condição de Pagamento Inexistente.');
}