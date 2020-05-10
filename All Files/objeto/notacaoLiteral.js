const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // Forma Antiga
const obj2 = { a, b, c } // Forma Nova
console.log(obj1, obj2)


const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr // Forma Antiga
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} // Forma Nova
console.log(obj4)


const obj5 = {
    funcao1: function() { // Forma Antiga
        // ...
    },
    funcao2() { // Forma Nova
        // ...
    }
}
console.log(obj5)