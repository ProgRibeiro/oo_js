// Classe pai
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    mostrarDetalhes() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}

// Classe herdeira Carro
class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }

    mostrarDetalhes() {
        super.mostrarDetalhes();
        console.log(`Portas: ${this.portas}`);
    }
}

// Classe herdeira Moto
class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    mostrarDetalhes() {
        super.mostrarDetalhes();
        console.log(`Cilindradas: ${this.cilindradas}`);
    }
}

// Instâncias
const carro1 = new Carro('Toyota', 'Corolla', 2020, 4);
const carro2 = new Carro('Fiat', 'Uno', 2015, 4);
const moto1 = new Moto('Honda', 'CB500', 2018, 500);

carro1.mostrarDetalhes();
carro2.mostrarDetalhes();
moto1.mostrarDetalhes();
