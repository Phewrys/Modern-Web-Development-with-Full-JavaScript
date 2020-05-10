const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // Define pai como prototype de filha1.
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, { // Define pai como prototype de filha2 e adiciona alguns atributos.
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? // Verifica se a propriedade key pertence a filha2.
        console.log(key) : console.log(`Por herança: ${key}`)
}