// Object.preventExtensions: não pode adicionar mais atributos (mas pode remover).
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // isExtensible: Verifica se o objeto produto pode ser adicionado mais atributos.

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal (selado): Não pode adiciona mais atributos nem remover, mas consegui alterar os valores.
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // isSealed: verifica se o objeto pessoa está selado.

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes (não pode adicionar, nem remover, nem alterar valores).