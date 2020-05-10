console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // Método mais recomendado para substitui um elemento em um índice especifico.
aprovados.push('Abia') // Método mais recomendado para adicionar um elemento no final do Array.
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Ordena.
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

/**************************************************************/

// Splice: Adiciona elemento em um determinado índice, ou remove elemento ou remove e adiciona ao mesmo tempo.
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) // Lê-se: a partir do índice 1, remova 2 elementos.
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // Lê-se: a partir do índice 1, remova 2 elementos e adicione Elemento1 e Elemento2.
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // Lê-se: a partir do índice 1, adicione Elemento1 e Elemento2.
console.log(aprovados)
