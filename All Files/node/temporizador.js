const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 23 * * 1', function () { // Vai executar a cada 5 segundos, as 22 horas de segunda.
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelamento Tarefa 1!')
}, 20000)

// setImmediate
// setInterval: Vai executar uma função de acordo com o tempo determinado.

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 23
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})