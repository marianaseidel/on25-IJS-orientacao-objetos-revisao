<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 25 - Imersão JavaScript | Semana extra - Orientação a Objetos | 2023 | Professora: [Luara Kerlen](https://github.com/luarakerlen)

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
* [Add outras intrucoes caso necessario]

### Objetivo
Revisar e reforçar o que é Programação Orientada a Objetos e seus principais conceitos.

### Resumo
O que veremos na aula de hoje?
- [Tema da Aula](#tema-da-aula)
    - [Instruções](#instruções)
    - [Objetivo](#objetivo)
    - [Resumo](#resumo)

- [Conteúdo](#conteúdo)

  - [Programação Orientada a Objetos](#programação-orientada-a-objetos)
    - [Estrutura](#estrutura)
      - [Classes](#classes)
      - [Objetos](#objetos)
      - [Atributos](#atributos)
      - [Métodos](#métodos)
  
    - [Os 4 pilares](#os-4-pilares)
      - [Abstração](#abstração)
      - [Encapsulamento](#encapsulamento)
        - [Modificadores de acesso em Javascript](#modificadores-de-acesso-em-javascript)
        - [Get](#get)
        - [Set](#set)
      - [Herança](#herança)
        - [Sobrescrita de atributo](#sobrescrita-de-atributo)
        - [Sobrescrita de construtor](#sobrescrita-de-construtor)
      - [Polimorfismo](#polimorfismo)
        - [Sobrescrita de método](#sobrescrita-de-método)

  - [Exercícios](#exercícios)
  - [Material da aula](#material-da-aula)
  - [Links Úteis](#links-úteis)
  - [Contatos da prô](#contatos-da-prô)

# Conteúdo

## Programação Orientada a Objetos
O paradigma de Orientação a Objetos (OO) foi criado como uma extensão do já existente paradigma estruturado. Com a introdução do conceito de objetos foi possível encapsular código e dados, e herdar comportamentos e características. Essas funcionalidades trazem as vantagens da reutilização de código, representação tangível de entidades do mundo real, e maior segurança do estado dos objetos por meio do encapsulamento.

A POO é um paradigma de programação que se propõe a abordar o design de um sistema em termos de **entidades** (que representam algo no mundo real) e **relacionamentos entre essas entidades**.
  ## Estrutura
  A Programação Orientada a Objetos possui dois pilares de sustentação: a utilização de **classes** e **objetos**. Além de possuírem, dentro dessas, **atributos** e **métodos**.

  ### Classes
  As classes são formas de definir objetos que serão reutilizados e instanciados durante o código.

  As classes são o modelo para um objeto. Em geral, quando utilizamos POO, classes são **representações em códigos de entidades do mundo real**, como *Pessoas*, *Contas Bancárias*, *Produtos* e etc.

  Uma classe é formada por **atributos**, que contém informações referentes àquele objeto, e por **métodos**, que são funções exclusivas para serem utilizadas pelos objetos criados a partir dessa classe.

  Exemplo de criação de classe:
  ```javascript
  class Funcionario {}
  ```

  ### Objetos
  Objetos são instâncias de classes criadas com dados específicos. Enquanto classes são como definições do conceito de uma entidade do mundo real, objetos são a **representação de um exemplar da entidade**.

  Exemplo de criação de objeto:
  ```javascript
  const funcionario1 = new Funcionario();
  ```

  ### Atributos
  Atributos são as **características** que as classes (e, por consequência, seus objetos) possuem.

  Exemplo de classe com atributos:
  ```javascript
  class Funcionario {
    nome;
    salario;

    constructor(nomeDoFuncionario, salarioDoFuncionario) {
      this.nome = nomeDoFuncionario;
      this.salario = salarioDoFuncionario;
    }
  }
  ```

  ### Métodos
  Métodos são as **funções** que a classe (e, por consequência, seus objetos) possui.

  Exemplo de classe com métodos:
  ```javascript
  class Funcionario {
    nome;
    salario;
    aumento = 1000;

    constructor(nomeDoFuncionario, salarioDoFuncionario) {
      this.nome = nomeDoFuncionario;
      this.salario = salarioDoFuncionario;
    }

    receberAumento(aumento) {
      this.salario = this.salario + this.aumento;
    }
  }
```

## Os 4 pilares
As duas bases da POO são os conceitos de classe e objeto.
Na prática, para a POO funcionar, ela precisa utilizar de 4 pilares básicos. Então, para uma linguagem de programação ser considerada orientada a objetos, deve haver quatro comportamentos característicos. São eles:
  ### Abstração
  Abstrair algo significa **esconder os detalhes da implementação** dentro de algo – às vezes um protótipo, às vezes em uma função. Portanto, quando você chama a função, não precisa entender exatamente o como ela está fazendo o que faz, só precisa saber qual resultado ela gera.

  Um exemplo claro do conceito de abstração seria o funcionamento de um carro. Quando acionamos ele para ligar, não precisamos saber quais passos ele faz para colocar o motor em funcionamento. Quando acionamos o freio, não precisamos saber todos os mecanismos que são acionados para fazer o carro frear. Apenas sabemos o que cada função do carro produz como resultado.

  Na Orientação a Objetos, a abstração consiste em extrair entidades do mundo real para dentro do código seguindo a fio suas responsabilidades.

  Vamos analisar a seguinte classe:
  ```javascript
  public class Conta {
    cod_banco;
    num_conta;
    saldo;
    limite;

    void ConsultarSaldo() {
      console.log(“Conta: ” + this.num_conta);
      console.log(“Saldo: ” + this.saldo);
    }

    void Depositar(valor) {
        this.saldo = this.saldo + valor;
    }

    void Sacar(valor) {
        this.saldo = this.saldo - valor;
    }
  }
  ```

  Para este caso, um cliente só precisa entender que uma conta é um local, em um determinado banco, onde é possível ser depositado e sacado valores.
  Perceba que essas são as características e funções de uma Conta no mundo real, **que foram abstraídas para o mundo dos códigos**.
  
  O cliente não precisa saber como foi implementada a função.

  Se outro desenvolvedor for utilizar a classe Conta, ele também não precisa saber como os métodos estão implementados, só precisam saber que existem e o que produzem como resultado final.

  ### Encapsulamento
  Quando definimos os atributos de um objeto, devemos garantir que alterar os valores desses atributos sejam responsabilidade exclusiva do próprio objeto. O encapsulamento, portanto, é o conceito de proteger os atributos de um objeto.

  A definição de encapsulamento é "a ação de colocar algo dentro ou como se estivesse em uma cápsula". Remover o **acesso** a partes do seu código e tornar as coisas privadas é exatamente o que o encapsulamento faz.

  O encapsulamento se trata de um dos elementos que adicionam segurança à aplicação em uma programação orientada a objetos pelo fato de **esconder** as propriedades, criando uma espécie de _caixa preta_.

  A maior parte das linguagens orientadas a objetos implementam o encapsulamento baseado em propriedades privadas, ligadas a métodos especiais chamados getters e setters, que irão retornar e setar o valor da propriedade, respectivamente.
  Essa atitude evita o acesso direto a propriedade do objeto, adicionando uma outra camada de segurança à aplicação.

  #### Modificadores de acesso em Javascript
  Uma propriedade ou método podem ser:

  - Público: o padrão do JS, acessível de qualquer lugar.
  - Privado: acessível apenas de dentro da classe.

  Para tornar uma propriedade privada, usamos `#` antes do nome.
  
  >Antes dessa feature ser implementada, era comum usar `_` na frente do nome de uma propriedade para indicar que ela era privada, **mas isso não faz com que ela seja de fato privada**.

  #### Get
  Tem a função de **retornar um valor** de um parâmetro.
  A palavra *get*, do inglês, significa *pegar*.

  Exemplo:
  ```javascript
  class Conta {
    ehAdm;
    #senha = 123;

    constructor(ehAdm) {
      this.ehAdm = ehAdm;
    }

    get senha() {
      if(this.ehAdm) {
        return this.#senha;
      }
    }
  }

  const conta1 = new Conta(true)
  console.log(conta1.senha) //123

  const conta2 = new Conta(false)
  console.log(conta2.senha) //undefined
  ```

  Alguns pontos importantes a serem destacados para o uso de getters são:

  - Não deve ter **nenhum** parâmetro.
  - Pode ter um identificador do tipo numérico ou string (aconselho a usar string).
  - Não pode ser utilizado mais de um getter para uma mesma propriedade.
  - Não pode haver uma propriedade comum com o mesmo nome do getter.

  #### Set
  Tem a função de **atribuir um valor** a um parâmetro.
  A palavra *set*, do inglês, significa *atribuir*.

  Exemplo:
  ```javascript
  class Conta {
    ehAdm;
    #saldo = 0;

    constructor(ehAdm) {
      this.ehAdm = ehAdm;
    }

    set saldo(novoSaldo) {
      if(this.ehAdm) {
        this.#saldo = novoSaldo;
      }
    }

    get saldo() {
      return this.#saldo;
    }
  }

  const conta1 = new Conta(true)
  console.log(conta1.saldo) // 0
  conta1.saldo = 100;
  console.log(conta1.saldo) // 100

  const conta2 = new Conta(false)
  console.log(conta2.saldo) // 0
  conta2.saldo = 100;
  console.log(conta2.saldo) // 0
  ```

  Alguns pontos importantes a serem destacados para o uso de setters são:

  - Deve ter **exatamente um** parâmetro.
  - Pode ter um identificador do tipo numérico ou string.
  - Não pode ter a mesma nomenclatura para propriedade e função.

  ---

  Perceba que, tanto o get, quanto o set, são utilizados pelos objetos como se eles fossem atributos ao invés de funções.
  Apesar disso, é importante lembrar que esses dois métodos são **funções**, mas funções especiais.

  ### Herança
  Para evitar repetição de entidades, usamos Herança para passar características e responsabilidades.

  A Herança é o conceito de passar características e comportamentos de uma classe para outras classes, suas herdeiras.

  Então, herança permite a criação de hierarquias de classes, onde classes e objetos herdam propriedades e comportamentos de sua _classe mãe/pai_ (ou _superclasse_). Uma classe que herda de uma classe mãe/pai (ou superclasse) é chamada de _subclasse_ ou _classe filha_, e objetos que recebem propriedades e comportamentos de um pai por meio de herança são chamados de _objetos filhos_.

  Vamos pensar no seguinte exemplo:

  Ao criar uma classe Animal, podemos afirmar que todo animal possui um “nome”. Por outro lado, todo cachorro também deveria ter um nome, sendo assim, a classe *Cachorro* é herdeira da classe *Animal*, pois todo Cachorro é um Animal (mas nem todo animal é um cachorro).

  ```javascript
  class Animal {
    nome;

    constructor(nome) {
      this.nome = nome;
    }

    falar() {
      console.log(`O animal chamado ${this.nome} está falando.`);
    }
  }

  class Cachorro extends Animal {}

  const animal1 = new Animal('Pipoca');
  console.log(animal1);
  animal1.falar(); // O animal chamado Pipoca está falando.

  const cachorro1 = new Cachorro('Aslam');
  console.log(cachorro1);
  cachorro1.falar(); // O animal chamado Aslam está falando.
  ```

  #### Sobrescrita de atributo
  Se a classe mãe tiver um atributo inicializado dentro da própria classe, a sua classe filha terá o mesmo atributo com o mesmo valor.

  Exemplo:
  ```javascript
  class Animal {
    nome;
    tipo = 'animal';

    constructor(nome) {
      this.nome = nome;
    }

    apresentar() {
      console.log(`${this.nome} é um ${this.tipo}`);
    }
  }

  class Cachorro extends Animal {}

  class Gato extends Animal {}

  const animal1 = new Animal('Pipoca');
  animal1.apresentar(); // Pipoca é um animal

  const cachorro1 = new Cachorro('Aslam');
  cachorro1.falar(); // Aslam é um animal

  const gato1 = new Gato('Salém');
  gato1.falar(); // Salém é um animal
  ```

  Porém, é possível sobrescrever o valor do atributo dentro da classe filha, bastando, para isso, escrever o atributo com o mesmo nome dentro da classe filha e passando o valor desejado.

  Exemplo:
  ```javascript
  class Animal {
    nome;
    tipo = 'animal';

    constructor(nome) {
      this.nome = nome;
    }

    apresentar() {
      console.log(`${this.nome} é um ${this.tipo}`);
    }
  }

  class Cachorro extends Animal {
    tipo = 'cachorro';
  }

  class Gato extends Animal {
    tipo = 'gato';
  }

  const animal1 = new Animal('Pipoca');
  animal1.apresentar(); // Pipoca é um animal

  const cachorro1 = new Cachorro('Aslam');
  cachorro1.falar(); // Aslam é um cachorro

  const gato1 = new Gato('Salém');
  gato1.falar(); // Salém é um gato
  ```

  #### Sobrescrita de construtor
  Caso a classe filha contenha atributos que serão recebidos no construtor, além do que aqueles da classe mãe, será necessário sobrescrever o construtor.

  Sobrescrever significa "escrever por cima". Porém, não podemos substituir completamente o construtor da classe mãe, apenas acrescentar o que precisamos, mas preservando o que já existe da classe mãe.

  Para fazer isso, basta utilizarmos o método `super()` dentro do construtor, passando como propriedades, os atributos herdador da classe mãe. Esse método deve ser chamado logo na **primeira linha do construtor** na classe filha, seguido das novas atribuições e implementações.

  Exemplo:
  ```javascript
  class Animal {
    nome;

    constructor(nome) {
      this.nome = nome;
    }
  }

  class Cachorro extends Animal {
    corDoPelo;

    constructor(nome, corDoPelo) {
      super(nome);
      this.corDoPelo = corDoPelo;
    }
  }

  const animal1 = new Animal('Pipoca');
  console.log(animal1);

  const cachorro1 = new Cachorro('Aslam', 'preto');
  console.log(cachorro1);
  ```

  Observe que, no construtor da classe filha, continuamos recebendo os atributos que são recebidos no construtor da classe mãe, pois os mesmos serão passados dentro do método `super()`.

  O método `super()`, por sua vez, está sendo chamado imediatamente na primeira linha do `constructor` da classe filha. Ao executar essa linha, o programa entende que, nesse momento, ele precisa executar o `constructor` da classe mãe (por isso precisamos passar os atributos utilizados nele) e depois retornar pra continuar executando o restante das linhas do `constructor` da classe filha.

  ### Polimorfismo
  >A palavra polimorfismo significa "de muitas formas" (do grego "poli" = muitas, "morphos" = forma).

  O Polimorfismo então, diz respeito à especialização das classes “filhas” (herdeiras).

  Como sabemos, os objetos filhos herdam as características e ações de seus “ancestrais”. Entretanto, em alguns casos, é necessário que as ações para um mesmo método seja diferente, bem como alguns atributos. Em outras palavras, o polimorfismo consiste na alteração do funcionamento interno de um método herdado de um objeto pai.

  Definimos o polimorfismo como um princípio a partir do qual as classes derivadas de uma única classe base são capazes de invocar os métodos que, embora apresentem a mesma assinatura, comportam-se de maneira diferente para cada uma das classes derivadas.

  #### Sobrescrita de método
  Para aplicar de fato o polimorfismo então, é possível **sobrescrever um método** que existe na classe de origem (a superclasse, ou classe mãe/pai).
  
  Temos 2 maneiras de fazer isso:
  ##### 1 - Sobrescrever tudo, substituindo toda a implementação "original".

  Para esse caso, basta escrever um método na classe filha, com o mesmo nome do método da classe mãe, e implementá-lo.
  
  Dessa maneira, ao ser executado, o programa levará em consideração o método criado na classe herdeira.

  Exemplo:
  ```javascript
  class Animal {
    nome;

    constructor(nome) {
      this.nome = nome;
    }

    falar() {
      console.log(`O animal chamado ${this.nome} está falando.`);
    }
  }

  class Cachorro extends Animal {
    falar() {
      console.log(`au au au`);
    }
  }

  const animal1 = new Animal('Pipoca');
  console.log(animal1);
  animal1.falar(); // O animal chamado Pipoca está falando.

  const cachorro1 = new Cachorro('Aslam');
  console.log(cachorro1);
  cachorro1.falar(); // au au au
  ```
  
  ##### 2 - Não substituir a implementação original mas, ao invés disso, acrescentar algo dentro do método pré-existente.

  Nesse caso, também é necessário escrever um método na classe filha com o mesmo nome do método da classe mãe, mas na implementação, é necessário utilizar a sintaxe `super.nomeDoMetodo()` em algum momento.
  
  Dessa maneira, ao ser executado, o programa também levará em consideração o método criado na classe herdeira, mas quando chegar na linha onde se chama o método `super.nomeDoMetodo()`, o programa executará o método da classe mãe, e após isso, retorna pra continuar executando o restante do método da classe filha (caso haja mais linhas).

  Exemplo:
  ```javascript
  class Animal {
    nome;

    constructor(nome) {
      this.nome = nome;
    }

    falar() {
      console.log(`O animal chamado ${this.nome} está falando.`);
    }
  }

  class Cachorro extends Animal {
    falar() {
      super.falar();
      console.log(`au au au`);
    }
  }

  const animal1 = new Animal('Pipoca');
  console.log(animal1);
  animal1.falar(); // O animal chamado Pipoca está falando.

  const cachorro1 = new Cachorro('Aslam');
  console.log(cachorro1);
  cachorro1.falar(); // O animal chamado Aslam está falando. au au au
  ```

***
### Exercícios 
* [Exercicio para sala](/exercicios/para-sala/)

### Material da aula 
* [Material](/material)

### Links Úteis
* [Semana 5 - Introdução à Orientação a Objeto I](https://github.com/reprograma/on25-IJS-orientacao-objetos-I)
* [Semana 6 - Introdução à Orientação a Objeto II](https://github.com/reprograma/on25-IJS-orientacao-objetos-II)

### Contatos da prô

- [LinkedIn](https://www.linkedin.com/in/luarakerlen/)
- [Github](https://github.com/luarakerlen)
- [Instagram](https://www.instagram.com/luaratech/)

<p align="center">
Desenvolvido com &#128156 por Luara Kerlen
</p>

