class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // Pai herda de Avo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // Chama o sobrenome de Avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)