const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Retorna as chaves (nomes dos atributos).
console.log(Object.values(pessoa)) // Retorna os valores dos atributos.
console.log(Object.entries(pessoa)) // Retorna um Array com o conjunto chave/valor.

Object.entries(pessoa).forEach(([chave, valor]) => { // Percorre os elementos
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento', { // O objeto pessoa recebe o nome dataNascimento.
    enumerable: true, // Determina que pode ser listada.
    writable: false, // Determina que não pode ser modificada.
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)