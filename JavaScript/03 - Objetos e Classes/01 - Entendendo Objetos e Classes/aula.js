//Objeto é uma coleção dinâmica de chave e valor.

//Classe é a definição, instância é a ocorrência.

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const valdoci = new Pessoa('Valdoci M Junior', 26);
const ananda = new Pessoa('Ananda B Caldas', 26);

console.log(valdoci);
console.log(ananda);


/*pessoa['nome'] = 'teste';          aqui é de forma dinamica!
pessoa.nome = 'teste';               aqui é onde eu sei o atributo que quero mudar!                                               */