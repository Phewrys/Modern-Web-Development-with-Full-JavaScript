// Objetos definidos como Globais não precisam ser exportados.
// Podem ser acessados de qualquer lugar (apenas importando uma única vez).
global.MinhaApp = Object.freeze({ // freeze para congela o objeto (não pode ser alterado).
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})