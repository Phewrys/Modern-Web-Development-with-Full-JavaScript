// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // Remove do objeto 'pessoa' os atributos 'nome' e 'idade'.
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // Remove do objeto 'pessoa' os atributos 'nome' e 'idade', e criar variáveis 'n' e 'i'.

console.log(n, i)
console.log(pessoa)