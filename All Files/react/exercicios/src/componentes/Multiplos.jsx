import React from 'react'

// Quando utilizar "export default", não pode colocar nome na função.
// export const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>

// export const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>


const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>

const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

export default { BoaTarde, BoaNoite }