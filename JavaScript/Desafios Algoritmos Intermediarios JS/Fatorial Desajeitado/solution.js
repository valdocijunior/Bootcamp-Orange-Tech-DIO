/*Desafio
O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n. Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.

Entrada
A entrada consiste em um valor inteiro positivo N.

Saída
A saída consiste em retornar o valor do seu fatorial desajeitado de N, conforme exemplo abaixo.

Exemplo 1:

Entrada	Saída
4	7
Explicação: 7 = 4 * 3 / 2 + 1 

Exemplo 2:

Entrada	Saída
10	12
Explicação: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
*/


let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 


if (n <= 2) { 


 print(n); 


} 


// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".


let numList = [];
let acumulador = 0;


while (n >= 0) {
 numList[n] = n;
 n--;
}
numList.shift();
numList.reverse();
if (numList.length >= 4) {
 acumulador = Math.floor((numList[0] * numList[1]) / numList[2]);
 acumulador = acumulador + numList[3];
 numList.splice(0, 4);
 
 while (numList.length >= 4) {
  acumulador = acumulador - Math.floor((numList[0] * numList[1]) / numList[2]);
  acumulador = acumulador + numList[3];
  numList.splice(0, 4);
    
 }
 if (numList.length == 3) {
  acumulador = acumulador - Math.floor((numList[0] * numList[1]) / numList[2]);
  numList.splice(0, 2);
  
 }


 if (numList.length == 2) {
  acumulador = acumulador - Math.floor(numList[0] * numList[1]);
  numList.splice(0, 2);
 }


 if (numList.length == 1) {
  acumulador = acumulador - Math.floor(numList[0]);
  numList.splice(0, 2);
 }
}
 
print(acumulador);