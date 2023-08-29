const { Mamifero } = require('../Mamifero');

class Gato extends Mamifero {
    tipo = 'gato';
    raca;

    constructor(nome, sexo, quantidadeMamas, raca){
        super(nome, sexo, quantidadeMamas);
        this.raca = raca;
    }

    ronronar(){
        console.log(`O ${this.tipo} chamado ${this.nome}, da raça ${this.raca} está ronronando.`)
    }
    
    falar(){
        super.falar();
        console.log('miau')
    }
}

module.exports = { Gato };
