const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// Recomendável utilitar o let, para que o atributo i exista apenas dentro do escopo 'for in'.
// Possibilitando seu uso em outra parte do código.
for (let i in notas) { // 'for in' retorna o índice dos elementos.
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log('---' + i)