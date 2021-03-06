import React from 'react';
import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            gols_casa: 0,
            gols_visitante: 0,
        };
    }

    marcarGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa + 1
        })
    }

    marcarGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante + 1
        })
    }

    render() {
        const { partida, casa, visitante } = this.props;
        const estilo =  {float: "left", "marginRight": "20px"};

        return (
            <div>
                <div style={estilo}>
                    <Time /* nome={this.props.casa.nome}  */
                          nome={casa.nome} 
                          gols={this.state.gols_casa}
                          marcarGol={this.marcarGolCasa.bind(this)}
                          //testar sem passar o contexto (retira o bind(this) e adiciona um metodo marcarGolCasa no coponente Time)
                    />
                </div>
                <div style={estilo}>
                    <Partida {...partida}/>
                    {/* <Partida estadio={this.props.partida.estadio}
                             data={this.props.partida.data}            
                             horario={this.props.partida.horario}
                    /> */}
                </div>
                <div style={estilo}>
                    <Time /* nome={this.props.visitante.nome} */ 
                          nome={visitante.nome}
                          gols={this.state.gols_visitante}
                          marcarGol={this.marcarGolVisitante.bind(this)}
                    />
                </div>
            </div>
            
        )
    }
}

