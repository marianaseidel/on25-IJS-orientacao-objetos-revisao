# Exercício de Sala 🏫  

Hoje trabalharemos em um projeto já existente.

Você é desenvolvedora de um sistema de gerenciamento ambiental e possui em mãos um projeto com a seguinte estrutura:

- [ ] Uma classe `Animal`, que possui como atributos:
  - [ ] `nome`, recebido na instanciação
  - [ ] `sexo`, recebido na instanciação
  - [ ] `#idade`, privado e inicializado dentro da classe com 0
  - [ ] `tipo`, inicializado dentro da classe com `animal`.
  
  E como métodos:
  - [ ] `apresentar()`
  - [ ] `falar()`

---

- [ ] Uma classe `Ave` que herda `Animal`
- [ ] Uma classe `Mamifero` que herda `Animal`

---

- [ ] Uma classe `Papagaio` que herda `Ave`
- [ ] Uma classe `Cachorro` que herda `Mamifero`
- [ ] Uma classe `Gato` que herda `Mamifero`

---
**Exercício 1:**

**Na classe Animal:**
a) Crie um método `get` para a idade.

b) Crie um método `set` para a idade. Nesse método, a idade só pode ser atribuída caso o valor recebido seja maior do que zero. Caso contrário, retorne uma mensagem com "Idade inválida!".

---

**Exercício 2:**

**Na classe Ave:**
a) Sobrescreva o atributo `tipo` como `ave`.

b) Declare um atributo `quantidadePenas`.

c) Sobrescreva o construtor para que, agora, a classe receba `quantidadePenas`.

d) Crie um método `voar()`. A implementação dele será um console.log que imprimirá: `*nome* está voando.`

---

**Exercício 3:**

**Na classe Papagaio:**
a) Sobrescreva o atributo `tipo` como `papagaio`.

b) Declare um atributo `raca`.

c) Sobrescreva o construtor para que, agora, a classe receba `raca`.

---

**Exercício 4:**

**Na classe Mamífero:**
a) Sobrescreva o atributo `tipo` como `mamífero`.

b) Declare um atributo `quantidadeMamas`.

c) Sobrescreva o construtor para que, agora, a classe receba `quantidadeMamas`.

d) Crie um método `amamentar()`. A implementação dele será um console.log que imprimirá: `*nome* está amamentando com *quantidadeMamas* mamas.`

e) Sobrescreva o método `falar()` por completo. Agora, o método deve ser um console.log que imprimirá: `O *tipo* chamado *nome* está emitindo seu som característico.`

---

**Exercício 5:**

**Na classe Cachorro:**
a) Sobrescreva o atributo `tipo` como `cachorro`.

b) Declare um atributo `raca`.

c) Sobrescreva o construtor para que, agora, a classe receba `raca`.

d) Crie um método `brincar()`. A implementação dele será um console.log que imprimirá: `O *tipo* chamado *nome*, da raça *raca* está brincando.`

e) Sobrescreva o método `falar()`. Agora, o método continuará fazendo o mesmo que faz na classe mãe, mas além disso imprimirá a string `au au au`.

---

**Exercício 6:**

**Na classe Gato:**
a) Sobrescreva o atributo `tipo` como `gato`.

b) Declare um atributo `raca`.

c) Sobrescreva o construtor para que, agora, a classe receba `raca`.

d) Crie um método `ronronar()`. A implementação dele será um console.log que imprimirá: `O *tipo* chamado *nome*, da raça *raca* está ronronando.`

e) Sobrescreva o método `falar()`. Agora, o método continuará fazendo o mesmo que faz na classe mãe, mas além disso imprimirá a string `miau`.

---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Resolvi o exercício dentro da pasta resolução.
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
