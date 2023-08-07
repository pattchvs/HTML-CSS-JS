// Métodos

const animal = {
    nome: "Bob",
    latir: function(){
        console.log("au au")
    }
}

console.log(animal.nome)

animal.latir()


// Mais sobre métodos

const pessoa = {
    nome: 'Patrick',

    getNome: function(){
        return this.nome
    },

    setNome: function(novoNome){
        this.nome = novoNome
    }
}

console.log(pessoa.getNome())

pessoa.setNome('João')

console.log(pessoa.getNome())

// Prototype

const text = 'asd'

console.log(Object.getPrototypeOf(text))

const bool = true

console.log(Object.getPrototypeOf(bool))

const arr = []

console.log(Object.getPrototypeOf(arr))

// Mais sobre prototype

const myObject = {
    a:'b'
}

console.log(Object.getPrototypeOf(myObject))

const mySecondObject = Object.create(myObject)

console.log(mySecondObject)

console.log(mySecondObject.a)

console.log(Object.getPrototypeOf(mySecondObject) === myObject)

// Classes básicas

const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemão"

console.log(pastorAlemao)
console.log(cachorro)
console.log(pastorAlemao.patas)

const bulldog = Object.create(cachorro)

bulldog.raca = 'Bulldog'

console.log(bulldog)

// Constructor

function criarCachorro(nome, raca) {
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro('Bob', 'SRD')

console.log(bob)

const jack = criarCachorro('Jack', 'Poodle')

console.log(jack)

// Funções como classe

function Cachorro(nome,raca){
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky")

console.log(husky)

// Métodos na função construtora

Cachorro.prototype.uivar = function(){
    console.log(this.nome + ' está uivando: Auuuuuuuuu!')
}

husky.uivar()

// Classes ES6

class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CachorroClasse('Jeff', "Labrador")

console.log(jeff)

console.log(Object.getPrototypeOf(jeff))

// Mais sobre as classes

class Caminhao {
    constructor(eixos,cor){
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhao(){
        console.log('Este caminhão tem: '+this.eixos+' eixos, e é da cor: '+this.cor)
    }
}

const scania = new Caminhao(6, 'Vermelha')
console.log(scania)

scania.descreverCaminhao()

Caminhao.motor = 4

const c2 = new Caminhao(4, "Preta")

console.log(c2)

console.log(c2.motor)

Caminhao.prototype.motor = 4

const c3 = new Caminhao(6, "Azul")

console.log(c3.motor)

// Override

class Humano{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

const patrick = new Humano('Patrick', 19)

console.log(patrick)

Humano.prototype.idade = 'Não definida'

console.log(patrick.idade)

console.log(Humano.prototype.idade)

// Symbol

class Aviao{
    constructor(marca, turbinas){
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2

Aviao.prototype[pilotos] = 10

const boeing = new Aviao("Boeing", 10)

console.log(boeing)

console.log(boeing[asas])

console.log(boeing[pilotos])

// Getters e Setters
class Post{
    constructor(titulo, descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo(){
        return 'Você está lendo: '+this.titulo
    }

    set adicionarTags(tags){
        const tagsArrays = tags.split(", ")
        this.tags = tagsArrays
    }
}

const myPost = new Post('Algum Post', 'É um post sobre programação')

console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTags = "programação, js, javascript"

console.log(myPost)

// Herança

class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero{
    constructor(patas, nome){
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, "Shark")

console.log(shark)

// instanceof
console.log(shark instanceof Lobo)

console.log(new Lobo(4, 'teste') instanceof Mamifero)
