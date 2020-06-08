const gulp = require('gulp')
// const series = gulp.series // Outra forma de fazer é: const { series } = require('gulp')
const { series, parallel } = require('gulp')

// Cada função representa uma Task.

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

// É executada quando uma determinada tarefa é finalizada.
function copiar(cb) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // Serve para selecionar quais os arquivos que vão ser usados como entrada para o workflow.
    gulp.src('pastaA/**/*.txt') // Qualquer arquivo que estiver dentra da pastaA com a extenção .txt será copiado.
    .pipe(gulp.dest('pastaB')) // pipe: Serve para aplicar transformações nos arquivos de entrada. gulp.dest(): coloca os arquivos em uma pasta de destino (caso a pasta não exista, ela é criada).
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

// Exporta para que algo seja executado.
module.exports.default = series(
    parallel(antes1, antes2), // Execulta em paralelo. As outras em series.
    copiar,
    fim,
)