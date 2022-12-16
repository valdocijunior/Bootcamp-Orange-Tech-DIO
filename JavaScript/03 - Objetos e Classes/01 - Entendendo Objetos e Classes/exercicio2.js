class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(peso, altura) {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc(calcularImc) {
    if (this.calcularImc() < 18.5) {
        return ' Abaixo do peso';
    } else if (this.calcularImc() >= 18.5 && this.calcularImc() < 25) {
        return ' Peso normal';
    } else if (this.calcularImc() >= 25 && this.calcularImc < 30) {
        return ' Acima do peso';
    } else if (this.calcularImc() >= 30 && this.calcularImc() < 40) {
        return ' Obeso';
    } else {
        return ' Obesidade Grave';
    }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose.calcularImc() + jose.classificarImc());

const jhonny = new Pessoa('Jhonny', 65, 1.88);
console.log(jhonny.calcularImc() + jhonny.classificarImc());