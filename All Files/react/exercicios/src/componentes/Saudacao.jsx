import React, { Component } from 'react'

export default class Saudacao extends Component {

    // props: não pode ser alterado.
    // state: pode ser alterado.
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props) // Envia as propriedades para a superclasse.
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} 
                onChange={this.setTipo}/>
                <input type="text" palceholder="Nome..." value={nome}
                onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}