/* Desafio
Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

Entrada
A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

Saída
A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N. */

const a = 3;
const N = 18;

let soma = 0;

    for (let i = a; i <= N; i++) {
        if(i % a === 0) {
            soma = i + soma;
        }
    }

console.log(soma);


// 5 10, 15, 20