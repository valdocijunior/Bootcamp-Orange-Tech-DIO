const precoEtanol = 4.15;
const precoGasolina = 4.85;
const tipoCombustivel = 'Etanol';
const consumoMedioGasolina = 13;
const consumoMedioEtanol = 8;
const distanciaViagem = 835;

const valorTotalGasolina = ((distanciaViagem/consumoMedioGasolina)*4.85);
const valorTotalEtanol = ((distanciaViagem/consumoMedioEtanol)*precoEtanol);

if (tipoCombustivel === 'Gasolina') {
    console.log(valorTotalGasolina.toFixed(2) + 'R$');
} else if (tipoCombustivel === 'Etanol') {
    console.log(valorTotalEtanol.toFixed(2) + 'R$');
}