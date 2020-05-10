const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // pop: Remove o útimo elemento do Array.
console.log(pilotos)

pilotos.push('Verstappen') // push: Adiciona um elemento no final do Array.
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do Array.
console.log(pilotos)

pilotos.unshift('Lewis') // Adiciona um elemento no início do Array.
console.log(pilotos)

/*** Splice pode adiconar e remover elementos ***/
// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // Lê-se: a partir do índice 2, adicione Bottas e Massa.
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // Lê-se: a partir do índice 3, remova 1 elemento.
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) // Retorna um novo Array a partir do índice 2.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Retorna um novo Array com os elementos 1, 2 e 3 (o 4 não entra).
console.log(algunsPilotos2)