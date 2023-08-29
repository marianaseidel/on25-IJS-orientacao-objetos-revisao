const { Animal } = require('./Animal');
const { Ave } = require('./animais/Ave');
const { Papagaio } = require('./animais/aves/Papagaio');
const { Mamifero } = require('./animais/Mamifero');
const { Cachorro } = require('./animais/mamiferos/Cachorro');
const { Gato } = require('./animais/mamiferos/Gato');

// Inicializando os animais
const animal1 = new Animal('Frida', 'feminino');
animal1.apresentar();
animal1.falar();

const animal2 = new Animal('Totó', 'masculino');
animal2.apresentar();
animal2.falar();

// Antes dos exercícios
const ave1 = new Ave('José', 'masculino');
ave1.apresentar();
ave1.falar();

const papagaio1 = new Papagaio('Loro', 'masculino');
papagaio1.apresentar();
papagaio1.falar();

const mamifero1 = new Mamifero('Caio', 'masculino');
mamifero1.apresentar();
mamifero1.falar();

const cachorro1 = new Cachorro('Pérola', 'feminino');
cachorro1.apresentar();
cachorro1.falar();

const gato1 = new Gato('Caju', 'feminino');
gato1.apresentar();
gato1.falar();

// Exercício 1
animal1.idade = -5; // Idade inválida
animal2.idade = 3;

console.log(`Idade da Frida: ${animal1.idade}`); // Idade da Frida: 0
console.log(`Idade do Totó: ${animal2.idade}`); // Idade do Totó: 3


// Exercício 2
const ave2 = new Ave('Maria', 'feminino', 100);
ave2.apresentar();
ave2.falar();
ave2.voar();


// Exercício 3
const papagaio2 = new Papagaio('Sininho', 'feminino', 100, 'Papagaio-verdadeiro');
papagaio2.apresentar();
papagaio2.falar();
papagaio2.voar();


// Exercício 4
const mamifero2 = new Mamifero('Cristal', 'feminino', 2);
mamifero2.apresentar();
mamifero2.amamentar();
mamifero2.falar();


// Exercício 5
const cachorro2 = new Cachorro('Bolinha', 'feminino', 2, 'Pitbull');
cachorro2.apresentar();
cachorro2.amamentar();
cachorro2.brincar();
cachorro2.falar();


// Exercício 6
const gato2 = new Gato('Fadinha', 'feminino', 2, 'Persa');
gato2.apresentar();
gato2.amamentar();
gato2.ronronar();
gato2.falar();

