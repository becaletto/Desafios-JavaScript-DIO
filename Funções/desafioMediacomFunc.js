
function calcMedia(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) / 3;
}       

function classMedia(media){
    if(media < 5)
{
    console.log("Reprovado");
} else if ((media >= 5) && (media <= 7))
{
    console.log("Recuperação");
} else {
    console.log("Aprovado");
}
}

const nota1 = 5, nota2 = 5, nota3 = 10;
const media = calcMedia;

console.log(calcMedia(nota1,nota2,nota3).toFixed(2));
console.log(classMedia(media));

