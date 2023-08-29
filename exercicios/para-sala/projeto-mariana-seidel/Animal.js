class Animal {
	nome;
	sexo;
	#idade = 0;
	tipo = 'animal';

	constructor(nome, sexo) {
		this.nome = nome;
		this.sexo = sexo;
	}

	get idade(){
		return this.#idade;
	}

	set idade(idadeNova){
		if(idadeNova > 0){
			this.#idade = idadeNova;
		} else {
			console.log('Idade inválida');
		}
	}

	apresentar() {
		console.log(`${this.nome} é um ${this.tipo} do sexo ${this.sexo}`);
	}

	falar() {
		console.log(`O ${this.tipo} chamado ${this.nome} está falando.`);
	}
}

module.exports = { Animal };
