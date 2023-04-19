
function calcIMC(peso, altura) {
    return peso / (altura * altura);
}

function classIMC(IMC){
    if (IMC < 18.5) {
        return 'Abaixo do peso';
    } else if (IMC >= 18.5 && IMC < 25) {
        return 'Peso normal';
    } else if (IMC >= 25 && IMC < 30) {
        return 'Acima do peso';
    } else if (IMC >= 30 && IMC < 40) {
        return 'Obeso';
    } else {
        return 'Obsedidade Grave';
    }
}


const peso =60;
const altura = 1.78;
const IMC = calcIMC(peso, altura);

console.log(calcIMC(peso, altura).toFixed(2));
console.log(classIMC(IMC));


