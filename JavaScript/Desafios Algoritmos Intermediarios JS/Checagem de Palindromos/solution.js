/* Neste desafio você deverá construir uma função que recebe uma String e identifique se a mesma é um palíndromo, ou seja, se a String é igual a ela mesma invertida. 

Dado que temos a String "digital" uma vez invertida temos "latigid" que são diferentes. 

Logo, NÃO é um Palíndromo. 

Já se recebemos a entrada "radar" uma vez invertida temos "radar" que são iguais.

Entrada
A entrada consiste em um palavra.

Saída
Para cada String informada, terá uma saída de valor Booleano: TRUE, caso a palavra seja um palíndromo, ou FALSE caso a palavra NÃO seja um palíndromo.

Exemplos de Entrada	Exemplos de Saída
radar

TRUE
digital	FALSE
ana	TRUE
*/

let entrada = 'radar';

let splitted = entrada.split("");

console.log(splitted);

let reversed = splitted.reverse("");

console.log(reversed);

let joined = reversed.join("");

console.log(joined);

    if(entrada === joined) {
        console.log("TRUE");
    } else {
        console.log("FALSE");
    }