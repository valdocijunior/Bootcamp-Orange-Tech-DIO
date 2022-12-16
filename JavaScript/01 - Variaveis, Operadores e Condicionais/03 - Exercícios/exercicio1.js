const nota1 = 3;
const nota2 = 3;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Sua nota é: ' + media.toFixed(2) + '. REPROVADO!');
} else if (media >= 5 && media < 7) {
    console.log('Sua nota é: ' + media.toFixed(2) + '. RECUPERAÇÃO!');
} else if (media >= 7) {
    console.log('Sua nota é: ' + media.toFixed(2) + '. PARABÉNS, VOCÊ ESTÁ APROVADO.');
}