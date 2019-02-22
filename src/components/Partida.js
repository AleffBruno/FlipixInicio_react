import React from 'react';

export default class Partida extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <h2>{this.props.estadio}</h2>
                <div>
                    <span>Data</span>
                    <span>-</span>
                    <span>Hora</span>
                </div>
            </div>
        )
    }
}