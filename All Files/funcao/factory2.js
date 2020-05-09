function criarProduto1(n, p, d) {
    return {
        nome: n,
        preco: p,
        desconto: d
    }
}

function criarProduto2(n, p) {
    return {
        nome: n,
        preco: p,
        desconto: 0.2
    }
}

function criarProduto3(nome, preco, desconto = 0.3) {
    return {
        nome,
        preco,
        desconto
    }
}

let produto1 = criarProduto1('Eggs', 10.0, 0.1)
let produto2 = criarProduto2('Eggs', 20.0)
let produto3 = criarProduto3('Eggs', 30.0)

console.log('Produto1 = ', produto1, '\nProduto2 = ', produto2, '\nProduto3 = ', produto3)
