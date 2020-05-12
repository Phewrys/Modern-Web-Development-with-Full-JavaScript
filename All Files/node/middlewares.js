// Middleware pattern (chain of responsibility - Cadeia de responsabilidade).
// Retira as dependências:
    // ANTES Passo1(){return Passo2()}, Passo2(){return Passo3()}, Passo3(){}
    // COM MIDDLEWARE Passo1(){next()}, Passo2(){next()}, Passo3(){}

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => { //  ... : Operador Spread.
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)