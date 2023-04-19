const peso = 60;
const altura = 1.78;
const IMC = peso / (altura * altura);

console.log(IMC.toFixed(2));

if(IMC < 18.5)
{
    console.log("Abaixo do peso");
} else if ((IMC >= 18.5) && (IMC < 25))
{
    console.log("Peso normal");
} else if ((IMC >= 25) && (IMC < 30))
{
    console.log("Acima do peso");
}else if ((IMC >= 30) && (IMC < 40))
{
    console.log("Obesidade");
} else {
    console.log("Obesidade grave");
}