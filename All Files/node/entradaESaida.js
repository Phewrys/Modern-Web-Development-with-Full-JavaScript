const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n') // stdout: Saída na tela (terminal).
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // stdin: Entrada pelo teclado.
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}