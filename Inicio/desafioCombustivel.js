const precoGasolina = 5.79;
const precoEtanol = 3.85;
let gastoMedio = 10;
let kilometragem = 48;
let tipoCombustivel = "Gasolina";
let total;

if (tipoCombustivel == "etanol")
{
    total = (kilometragem * precoEtanol) / gastoMedio;
}
else {
        total = (kilometragem * precoGasolina) / gastoMedio;
}

console.log(total.toFixed(2));