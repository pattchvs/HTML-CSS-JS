// Arrays

const lista = [1, 2, 3, 4, 5]

console.log(lista)

console.log(typeof lista)

const itens = ['Patrick', true, 15, 1.4, [], {}]
console.log(itens)

const arr = ['a', 'b', 'c', 'd']

console.log(arr[0])
console.log(arr[3])

// Propriedades

const numbers = [5, 3, 4]

console.log(numbers.length)

console.log(numbers['length'])

const myName = 'Patrick'

console.log(myName.length)

// Métodos

const otherNumbers = [1,2,3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

const text = 'algum texto'

console.log(text.toUpperCase())

console.log(typeof text.toUpperCase)

console.log(text.indexOf('t'))

// Objetos

const person = {
    name: 'Patrick',
    age: '19',
    job: 'Programador'
}

console.log(person)

console.log(person.name)

console.log(person.name.length)

// Criando e deletando propriedades

const car = {
    engine: 2.0,
    brand: 'VW',
    model: 'Tiguan',
    km: 20000
}

console.log(car)

car.doors = 4

console.log(car)

delete car.km

console.log(car)

// Mais sobre objetos

const obj = {
    a: 'teste', 
    b: true
}

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)

console.log(obj2)

// Conhecendo melhor os objetos

console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))
console.log(Object.entries(car))

// Mutação

const a = {
    name: 'Patrick'
}

const b = a

console.log(a)
console.log(b)

console.log(a===b)

a.age = 31

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)

// Loops

const users = ['Patrick', 'João', 'Pedro', 'Miguel']

for (let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`)
}

// Push e Pop

const array = ['a', 'b', 'c']

array.push('d')

console.log(array)

array.pop()

console.log(array)

const itemRemovido = array.pop()

console.log(itemRemovido)

console.log(array)

array.push ('z', 'x', 'y')

console.log(array)

// Shift e Unshift

const letters = ['a', 'b', 'c']

const letter = letters.shift()

console.log(letter)
console.log(letters)

letters.unshift('p', 'q', 'r')

letters.unshift('z')

console.log(letters)

// indexOf e lastIndexOf

const myElement = ['Morango', 'Maçã', 'Abacate', 'Pera', 'Abacate']

console.log(myElement.indexOf('Maçã'))

console.log(myElement.indexOf('Abacate'))

console.log(myElement.lastIndexOf('Abacate'))

console.log(myElement.indexOf('Mamão'))


// Slice

const testeSlice = ['a', 'b', 'c', 'd', 'e', 'f']

const subArray = testeSlice.slice (2,4)

console.log(subArray)

console.log(testeSlice)

const subArray2 = testeSlice.slice (2,4+1)

console.log(subArray2)

const subArray3 = testeSlice.slice (10,20)

console.log(subArray3)

const subArray4 = testeSlice.slice(2)

console.log(subArray4)

// forEach

const nums = [1,2,3,4,5]

nums.forEach((n)=>{
    console.log('O número é: '+n)
})

const posts = [
    {title: 'Primeiro Post', category: 'PHP'},
    {title: 'Segundo Post', category: 'PHP'},
    {title: 'Terceiro Post', category: 'PHP'}
]

posts.forEach((post)=>{
    console.log('Exibindo post: '+post.title+', da categoria '+post.category)
})


//  Includes

const brands = ['BMW', 'VW', "Fiat"]

console.log(brands.includes('Fiat'))

console.log(brands.includes('Kia'))

if (brands.includes('BMW')){
    console.log('Há carros da marca BMW')
}

// Reverse

const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse()

console.log(reverseTest)

// Trim
const trimTest = '  Testando \n  '

console.log(trimTest)

console.log(trimTest.trim())

console.log(trimTest.length)

console.log(trimTest.trim().length)

//  padStart e padEnd

const testePadstart = '1'

const newNumber = testePadstart.padStart(4, '0')

console.log(testePadstart)

console.log(newNumber)

const testePadEnd = newNumber.padEnd(10, '0')

console.log(testePadEnd)


// Split

const frase = "O rato roeu a roupa do rei de roma"

const arrayDaFrase = frase.split(' ')

console.log(arrayDaFrase)

// Join

const fraseDenovo = arrayDaFrase.join(" ")

console.log(fraseDenovo)

const itensParaComprar = ['Mouse', 'Teclado', 'Monitor']

const fraseDeCompra = "Precisamos comprar: "+itensParaComprar.join(', ')

console.log(fraseDeCompra)

// Repeat

const palavra = 'Testando '

console.log(palavra.repeat(5))

// Rest Operator / Rest Parameters

const somaInfinita = (...args) => {

    let total = 0

    for(let i=0; i<args.length; i++){
        total += args[i]
    }
    return total
}

console.log(somaInfinita(1, 2, 3))

console.log(somaInfinita(1, 20, 3343, 424, 3425, 345))

// for... of

const somaInfinita2 = (...args)=> {

    let total = 0

    for(num of args){
        total +=num
    }
    return total
}

console.log(somaInfinita2(1,32,46,7,85,32))

// Destructuring

const userDetails = {
    firstName: 'Patrick',
    lastName: 'Chaves',
    job: 'Programador'
}

const {firstName, lastName, job} = userDetails

console.log(firstName, lastName, job)

const {firstName: primeiroNome} = userDetails

console.log(primeiroNome)

// Destructuring em arrays
const myList = ['Avião', 'Submarino', 'Carro']

const [veiculoA, veiculoB, veiculoC] = myList

console.log(veiculoA, veiculoB, veiculoC)

// JSON

const myJson = '{"name": "Patrick", "age": 19, "skills": ["PHP", "Javascript", "CSS"]}'
console.log(myJson)
console.log(typeof myJson)

// JSON para objeto
const myObject = JSON.parse(myJson)

console.log(myObject)

// Objeto para JSON
const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)

console.log(typeof myNewJson)


// Json inválido
const badJson = '{"name": patrick, "age": 19}'

// const myBadObject = JSON.parse(badJson)

// console.log(myBadObject)


