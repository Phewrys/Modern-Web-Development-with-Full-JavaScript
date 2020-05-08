// Função no modelo antigo
let dobro1 = function (a) {
    return 2 * a
}

// Função Arrow
dobro2 = (a) => {
    return 2 * a
}

// Função de linha
dobro3 = a => 2 * a

console.log(dobro1(1))
console.log(dobro2(2))
console.log(dobro3(3))


ola1 = () => 'Olá'
ola2 = _ => 'Olá' // Possui um parâmetro
console.log(ola1())
console.log(ola2())