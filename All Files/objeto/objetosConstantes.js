// pessoa -> 123 -> {...}
// (objeto -> endereco -> {valor})
const pessoa = { nome: 'Thiago'}
pessoa.nome = 'Alves'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // Congela o objeto pessoa, não pode ser alterado.

pessoa.nome = 'Phewrys' // Não funciona pois o objeto pessoa está congelado.
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'James' }) // Nem o endereço e nem o valor pode ser mudado.
pessoaConstante.nome = 'Lebron'
console.log(pessoaConstante)