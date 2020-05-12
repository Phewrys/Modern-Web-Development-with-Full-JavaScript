const fs = require('fs') // Serve para Ler e Escrever.

const caminho = __dirname + '/arquivo.json' // __dirname: diretório atual.
              // Também pode ser usado o caminho completo depois do =.

// Leitura Sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8') // readFileSync: Vai ler o arquivo de forma sicrona.
                                                   // utf-8: unicode usado na hora em que o arquivo.json foi escrito.
                                                   // (pode ser obtido olhando no canto inferior esquerdo do VSCode).
console.log(conteudo)

// Leitura Assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) // Só funciona se for um objeto.
    console.log(`${config.db.host}:${config.db.port}`)
})

// Faz o mesmo que as linhas 13..16, também retorna um objeto. Só que sem precisar converter.
const config = require('./arquivo.json')
console.log(config.db)

// Leitura de Pasta
// readdir: Lei do diretório. __dirname: diretório atual.
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})