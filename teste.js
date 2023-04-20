
    class Pessoa {
        nome; peso; altura;
        constructor(nome, peso, altura) {
            this.nome = nome;
            this.peso = peso;
            this.altura = altura;
        }   

        descrever() {
            console.log(`${this.nome} pesa ${this.peso}Kg e tem ${this.altura}m de altura`);
        }
        
        calcImc(){
            return this.peso / (this.altura * this.altura);
        }

        classIMC(IMC){
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
}   

const p1 = new Pessoa('João', 70, 1.70);
p1.descrever();
console.log(p1.calcImc().toFixed(2));
console.log(p1.classIMC(p1.calcImc()));

console.log("");

const p2 = new Pessoa('Maria', 60, 1.64);
p2.descrever();
console.log(p2.calcImc().toFixed(2));
console.log(p2.classIMC(p2.calcImc()));
