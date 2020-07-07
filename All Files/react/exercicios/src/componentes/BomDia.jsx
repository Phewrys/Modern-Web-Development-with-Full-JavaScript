// RETORNANDO MAIS DE UM ELEMENTO DENTRO DE UMA div.
// import React from  'react' 

// export default props =>
//     <div>
//         <h1 key='nomeChaveUm'>Bom dia {props.nome}!</h1>,
//         <h2 key='nomeChaveDois'>Até Breve!</h2>
//     </div>



// RETONANDO MAIS DE UM ELEMENTO FORA DA div.
// import React from  'react' 

// export default props =>
//     // Permite a utilização de um conjunto de elementos adjacentes.
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até Breve!</h2>
//     </React.Fragment>



// UTILIZANDO O import DO Fragment
// import React, { Fragment } from  'react' 

// export default props =>
//     <Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até Breve!</h2>
//     </Fragment>



// OUTRA FORMA DE RETORNAR MAIS DE UM ELEMENTO (utilizando Array).
import React, { Fragment } from  'react' 

export default props => [
    <h1 key='nomeChaveUm'>Bom dia {props.nome}!</h1>,
    <h2 key='nomeChaveDois'>Até Breve!</h2>
]
// Quando trabalhar com array, deve-se utilizar a propriedade Key 
// (isso permite que o React possa encontra os elementos de uma forma mais otimizada dentro da DOM).