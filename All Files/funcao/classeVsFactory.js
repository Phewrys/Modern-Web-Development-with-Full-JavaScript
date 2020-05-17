class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Thiago')
p1.falar()

const criarPessoa = nome => {
    return {
        falar2: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Thiago')
p2.falar2()