const { Mamifero } = require('../Mamifero');

class Cachorro extends Mamifero {
	tipo = 'cachorro';
	raca;

	constructor(nome, sexo, quantidadeMamas, raca) {
		super(nome, sexo, quantidadeMamas);
		this.raca = raca;
	}

	brincar() {
		console.log(
			`O ${this.tipo} chamado ${this.nome}, da raça ${this.raca} está brincando.`
		);
	}

	falar() {
		super.falar();
		console.log('au au au');
	}
}

module.exports = { Cachorro };
