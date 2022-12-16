const notasAlunos = [2, 7, 3, 8, 10, 4];

let maiorNota = 0;

    for (let i = 0; i < notasAlunos.length; i++) {
        if (notasAlunos[i] > maiorNota) {
            maiorNota = notasAlunos[i];
        }
    }

console.log('A maior nota foi: ' + maiorNota);