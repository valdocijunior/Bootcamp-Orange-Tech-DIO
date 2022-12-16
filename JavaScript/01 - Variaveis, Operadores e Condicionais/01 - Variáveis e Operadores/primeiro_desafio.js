/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combústivel do carro por km;
3 - Distância em km da viagem;

*/

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 1580;

    let gastoTotal = ((distanciaEmKm/kmPorLitros)*precoCombustivel);

    console.log(gastoTotal.toFixed(2) + 'R$');