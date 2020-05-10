const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// forEach com Array retorna sempre 3 valores: o Nome, o Índice e o próprio Array.
// (se quiser acessar apenas índie ou o array, precisa chamar os anteriores).
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)