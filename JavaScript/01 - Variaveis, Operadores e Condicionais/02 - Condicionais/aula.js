

// 1 igual é atribuição;
// 2 iguais ignora o tipo da variavel;
// 3 é igualdade, sem ignorar o tipo de variável; 

const numero = 5;

const numeroDivisivelPor5 = (numero % 5) === 0;

console.log(numeroDivisivelPor5);
//const numeroPar = (numero % 2) === '0'; Neste caso, retornará falso pois está comparando numero com String '';

if (numero === 0) {
    console.log('O número é inválido!');
} else if (numeroDivisivelPor5) {
    console.log('Sim!');
} else {
    console.log('Não!');
}

/*if (!numeroPar) {  o ! indica negação, é o mesmo que dizer que o SE O NUMERO NAO FOR PAR...
    console.log('O numero é Impar!');
}*/
