console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('') 
    //split: divide a string onde estiver espaço, e coloca suas partes em um Array.
    // reverse: reverte os valores da string.
    //join: junta tudo novamente.
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())