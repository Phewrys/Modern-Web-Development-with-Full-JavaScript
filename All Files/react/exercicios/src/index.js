import React from 'react'
import ReactDOM from 'react-dom'
// O "default" deve ficar forma das {}.
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// ReactDOM.render(<BomDia></BomDia>, document.getElementById('root'))
// ReactDOM.render(<BomDia />, document.getElementById('root'))
ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>    
, document.getElementById('root'))