const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// Expressões Lambda
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

let soma = (x, y) => x+y // Cria a função soma.
console.log(soma(5, 5))

function somax(x, y){ // Também soma.
    return x+y
}
console.log(somax(10, 10))