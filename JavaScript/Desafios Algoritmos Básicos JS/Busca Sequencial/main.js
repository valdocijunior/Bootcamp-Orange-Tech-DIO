/* Uma busca sequencial se caracteriza por percorrermos todos os  elementos de uma estrutura em busca do elemento “X” desejado. Neste desafio, dada uma estrutura de vetor A [a1, a2...an], percorra todo o vetor fazendo as comparações de A[N] = X. Caso a condição seja verdadeira, “X” existe na estrutura e a busca será concluída com sucesso. 

Considere um array de 10 elementos do tipo inteiro: 

Os elementos são {64, 137, -16, 43, 67, 81, -90, 212, 10, 75}. 

● Carregue esses elementos em um array.  

● Implementação da busca sequencial: 

● Crie um método  que realiza uma busca sequencial.  

● Se o valor constar no array, retorne um texto contendo o valor e sua respectiva posição no array. Caso contrario retorne um texto dizendo que o número não foi encontrado, conforme exemplos abaixo.

 

Entrada
A entrada consiste em um valor de busca e/ou array

Saída
A saída será a a posição do elemento no array, caso o valor não se encontre na Array, retorne a frase " Numero __ nao encontrado!", como no exemplo abaixo: */

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 
let valor = 4;
let naoEncontrado = 0;

    for (let i = 0; i < elementos.length; i++) {
        if (valor === elementos[i]) {
            console.log('Achei ' + valor + ' na posicao ' + i);
        } else {
            naoEncontrado++;
        }
    }

    if(naoEncontrado === elementos.length) {
        console.log('Numero ' + valor + ' nao encontrado!');
    }

