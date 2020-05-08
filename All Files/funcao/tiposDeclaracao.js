// function declaration
function soma(x, y) {
    return x + y
}
/* Dessa forma é possível chamar a função antes 
 * de ela ser declarada (conforme linha 1), pois
 * o interpretador do Javascript primeiro carrega
 * todas as funções, e depois começa a executar o código.
 */
console.log(soma(3, 4))

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))