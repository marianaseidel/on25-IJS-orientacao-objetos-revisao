const { Animal } = require('../Animal');

class Mamifero extends Animal {
	tipo = 'mamífero';
	quantidadeMamas;

	constructor(nome, sexo, quantidadeMamas) {
		super(nome, sexo);
		this.quantidadeMamas = quantidadeMamas;
	}

	amamentar() {
		console.log(
			`${this.nome} está amamentando com ${this.quantidadeMamas} mamas.`
		);
	}

	falar() {
		console.log(`O ${this.tipo} chamado ${this.nome} está emitindo seu som característico.`);
	}
}

module.exports = { Mamifero };
