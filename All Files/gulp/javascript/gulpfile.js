const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    return gulp.src('src/**/*.js') // Arquivos selecionados.
        .pipe(babel({ // Transformação que será aplicada.
            comments: false, // Arquivos de comentários não vão para o arquivo final.
            presets: ["env"] // Pega o código .js e transforma para uma versão mais nova do Javascript.
        }))
        .pipe(uglify()) // Remove todos os espaços/caracteres desnecessários do código (minificação).
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js')) // Concatena todo o código vindo do ugfily e gera um arquivo com o resultado. (min e de MINificação).
        .pipe(gulp.dest('build')) // dest: define a pasta que irá receber o arquivo transformado.
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(transformacaoJS, fim)