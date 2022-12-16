class Carro {
    marca;
    cor;
    consumoMedio;

    constructor(marca, cor, consumoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.consumoMedio = consumoMedio;
    }
    valorTotal (distanciaEmKm, precoCombustivel) {
        return (((distanciaEmKm)/this.consumoMedio)*precoCombustivel + 'R$');
    }

}

const gol = new Carro('Volkswagen', 'Branco', 13);

const onyx = new Carro('Chevrolet', 'Azul', 11);

console.log (gol.valorTotal(950, 6.30));
console.log (onyx.valorTotal(630, 3.95));