const mediaAlunos = [2, 7, 3, 8, 10, 4];

    for (let i = 0; i < mediaAlunos.length; i++) {
        if (mediaAlunos[i] < 5) {
            console.log('O aluno com media: ' + mediaAlunos[i] + ' está de recuperação.');
        } else {
            console.log('O aluno com média: ' + mediaAlunos[i] + ' está aprovado.');
        }
    }