// Os ... indicam Argumento variável, ou seja, pode ser passado quantos argumentos quiser.
module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
}