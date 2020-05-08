function tratarErroELancar(erro) {
    throw 'Phewrys'
}

function imprimirNomeGritato(obj) {
    try { // Trecho de código que pode dar erro.
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // Caso der erro.
        tratarErroELancar(e)
    } finally { // Sempre é executado.
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritato(obj)