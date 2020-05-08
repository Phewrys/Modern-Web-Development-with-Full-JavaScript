/*
 * this : aponta para o objeto para o qual é dono dessa 
 * função, no exemplo: aponta para saudacao do objeto pessoa.
 */

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

// Se chamar de fora, não reconhece. Por isso é necessário o bind().
pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: Funcional e OO

/* 
 * bind() garante que uma determinada função que foi 
 * definida dentro de um componente sempre aponte para esse
 * componente, independente de onde seja chamada essa função.
 */
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()