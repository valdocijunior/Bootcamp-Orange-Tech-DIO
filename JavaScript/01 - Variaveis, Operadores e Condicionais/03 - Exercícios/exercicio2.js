
const peso = 82;
const altura = 1.80;

const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log('O seu IMC é: ' + imc.toFixed(2) + '. Você está Abaixo do peso.')
} else if (imc >= 18.5 && imc < 25) {
    console.log('O seu IMC é: ' + imc.toFixed(2) + '. Você está com o Peso normal.')
} else if (imc >= 25 && imc < 30) {
    console.log('O seu IMC é: ' + imc.toFixed(2) + '. Você está Acima do peso.')
} else if (imc >= 30 && imc < 40) {
    console.log('O seu IMC é: ' + imc.toFixed(2) + '. Você está obeso.')
} else {
    console.log('O seu IMC é: ' + imc.toFixed(2) + '. ATENÇÃO, VOCÊ ESTÁ COM OBESIDADE GRAVE!!!')
}
