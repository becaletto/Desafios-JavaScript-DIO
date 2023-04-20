
class Carro{
    marca; cor; gastoMedioPorKm;

    constructor(modelo, cor, gastoMedioPorKm){
        this.modelo = modelo;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calc (preco) {
        this.gastoMedioPorKm = this.gastoMedioPorKm * preco;
        console.log("O gasto médio de um "+ this.modelo,""+ this.cor ,"é de "+ this.gastoMedioPorKm,"km");
    }
}

let carro1 = new Carro('HB20', 'branco', 10);
carro1.calc(5.15);
console.log("");
let carro2 = new Carro('Celta', 'preto', 15);
carro2.calc(5.15);
