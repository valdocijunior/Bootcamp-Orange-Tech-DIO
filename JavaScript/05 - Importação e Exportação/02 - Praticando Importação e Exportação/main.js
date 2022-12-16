const { gets, print } = require('./funcoes_auxiliares.js');        //Forma de importação "destruindo o objeto". Efetuando a desestruturação.
/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const quatidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

    for (let i = 0; i < quatidadeDeAlunos; i++) {
        const numeroSorteado = gets();
        if (numeroSorteado > maiorValorEncontrado) {
            maiorValorEncontrado = numeroSorteado
        }
    }


print(maiorValorEncontrado);