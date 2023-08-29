const { Ave } = require('../Ave');

class Papagaio extends Ave {
    tipo = 'papagaio';
    raca;

    constructor(nome, sexo, quantidadePenas, raca){
        super(nome, sexo, quantidadePenas);
        this.raca = raca;
    }
}

module.exports = { Papagaio };
