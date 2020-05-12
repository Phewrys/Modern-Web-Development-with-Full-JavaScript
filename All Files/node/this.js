console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

funciton logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
    // This dentro de uma função acessa o global.
}

// This fora da função acessa o exports.