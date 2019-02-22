import React from 'react';
import Contador from './Contador'
import PlacarContainer from './PlacarContainer'

const dados = {
    partida: {
        estadio: "Maracana",
        data: "01/01/2010",
        horario: "19h"
    },
    casa: {
        nome: "vascos"
    },
    visitante: {
        nome: "flamengos"
    }
}

export default class App extends React.Component { 
    render() {
        return (
            <PlacarContainer {...dados} clima={1} />
            // <PlacarContainer partida={dados.partida} 
            //                  casa={dados.casa}
            //                  visitante={dados.visitante}
            // />
        )
    }
}

// PlacarContainer.propTypes = {
//     clima: React.PropTypes.string
// }