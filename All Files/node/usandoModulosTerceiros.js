const _ = require('lodash') // Referência para a biblioteca lodash é feita com _

// setInterval(): Função que é executada de tempos em tempos.
setInterval(() => console.log(_.random(1, 1000)), 2000) // Vai imprimir um valor aleatório de 1 a 1000 a cada 2 segundos.
