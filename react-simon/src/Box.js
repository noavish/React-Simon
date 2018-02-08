import React, { Component } from 'react';
import './App.css';

class Box extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={this.props.className} color={this.props.color} data-id={this.props.colorIndex} onClick={this.props.playerClicked}></div>

        );
    }
}

export default Box;