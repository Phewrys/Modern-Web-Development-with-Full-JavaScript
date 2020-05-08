const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem Callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]) // push insere o elemento.
    }
}
console.log(notasBaixas1)

// Com Callback
const notasBaixas2 = notas.filter(function (nota) { // filter: filtra os elementos de acordo com os parâmetros.
    return nota < 7
})
console.log(notasBaixas2)

// Com Arrow
const notasMenorQue7 = notas => notas < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)