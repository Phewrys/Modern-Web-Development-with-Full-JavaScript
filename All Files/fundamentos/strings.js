const escola = "Cod3r"

console.log(escola.charAt(4)) // Retorna o caractere que está no índice 4 (retorna r).
console.log(escola.charAt(5)) // Retorna vazio.
console.log(escola.charCodeAt(3)) // Retorna o valor ASCII (51) do índice 3.
console.log(escola.indexOf('o')) // Retorna o índice do caractere 'o'.

console.log(escola.substring(2)) // Retorna os caracteres do índice 2 em diante.
console.log(escola.substring(1, 3)) // Retorna do índice 1 até o 3, sem incluir o 3.

console.log('Escola '.concat(escola).concat('!')) // Concatena.
    console.log('Escola ' + escola + '!') // Concatena.
console.log(escola.replace('o', 'e')) // Substitui o caractere 'o' por 'e'.

// REGEX - Expressões Regulares
console.log(escola.replace(/\d/, 'e')) // Substitui todos os digitos pelo caractere 'e'.
console.log(escola.replace(/\w/g, 'e')) // Substitui tudo pelo caractere 'e'.

console.log('Ana,Maria,Pedro'.split(',')) // Divide onde estiver ','.
    console.log('Ana,Maria,Pedro'.split(/,/)) // Mesmo de cima, usando Regex.