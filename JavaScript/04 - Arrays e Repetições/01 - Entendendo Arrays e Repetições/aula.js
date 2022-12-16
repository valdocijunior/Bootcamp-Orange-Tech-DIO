//const alunos = ['João', 'Vitor', 'Marina'];

//alunos.push('Renan');         //Adiciona no final;

//alunos[4] = 'Vinícius';       //Adiciona em uma posição específica;

//alunos.pop();                   //remove da posição mais longe;
//alunos.shift();                 //remove da posição mais próxima;

//console.log(alunos);

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }

const media = soma  / notas.length;

console.log(soma);
console.log(media);

