const moduloA = require('../../moduloA.js') // Sem o .js também funciona.
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC/index.js') // Se o arquivo que estiver importando for index.js, não precisa informar seu nome.
// const c = require('./pastaC')          Pois este arquivo já é chamado automaticamente.
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) // Abra o browser e no campo da URL digite: http://localhost:8080/