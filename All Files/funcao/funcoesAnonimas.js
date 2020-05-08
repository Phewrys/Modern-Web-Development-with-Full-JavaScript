// Função Anonimas é uma função sem nome.
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(4, 5, soma)
imprimirResultado(4, 2, function (x, y){return x - y})

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}
pessoa.falar()