// Cadeia de protótipos (prototype chain)
// (Object.prototype é de onde todo objeto herda)
Object.prototype.attr0 = '0' // não faça isso em casa!

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' } // __proto__: É a notação que indica que o objeto atual herda de alguem.
const filho = { __proto__: pai, attr3: 'C' } // Define uma relação de prototype (filho tem como prototype pai) (forma 1)
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // this: referencia o objeto atual. super: chama o método do seu prototype.
    }
}

Object.setPrototypeOf(ferrari, carro) // setPrototypeOf: função que estabelece uma relação de prototype entre dois objetos (ferrari tem carro como seu prototype).
Object.setPrototypeOf(volvo, carro)  // forma 2

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())