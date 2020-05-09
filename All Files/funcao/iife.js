// IIFE: Immedialety Invoked Function Expression
// Função Auto Invocada: E uma função que na declaração já chama ela mesma.

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()