const { Animal } = require('../Animal');

class Ave extends Animal {
	tipo = 'ave';
	quantidadePenas;

	constructor(nome, sexo, quantidadePenas) {
		super(nome, sexo);
		this.quantidadePenas = quantidadePenas;
	}

	voar() {
		console.log(`${this.nome} está voando.`);
	}
}

module.exports = { Ave };
