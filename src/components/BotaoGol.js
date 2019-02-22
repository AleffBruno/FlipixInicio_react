import React from 'react';

export default class BotaoGol extends React.Component {
    constructor() {
        super();

    }

    handleClick(event) {
        event.preventDefault();
        this.props.marcarGol();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)} >Gol</button>
        )
    }
}