/* Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   

Entrada
A Entrada será composta por um número inteiro, N. 

Saída
Será  impresso o somatório de N até 0, como no exemplo a baixo:  */

let n = 10;

function somatorio(n){
    if (n <= 1) {
        return n;
    }
    return n + somatorio(n-1);
}

console.log(somatorio(n));