const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // push: Adiciona valores
console.log(valores)

valores.pop() // pop: Remove o último valor.
console.log(valores)

delete valores[3] // delete: Deleta o valor de um índice específico.
console.log(valores)

console.log(typeof valores)