import React, { Component } from 'react';
import './App.css';
import Box from './Box.js'

class Game extends Component {
    constructor(props){
        super(props);
        this.state = ({colors: ['green', 'blue', 'yellow', 'red']});
    }

    createBoxes() {
        return this.state.colors.map((color, index)=>{
            return <Box key={index+1} colorIndex={index+1} className={color} playerClicked={this.props.playerClicked}/>
        });
    }

    render() {
        return (
            <div className="boxes">
                {this.createBoxes()}
            </div>
        );
    }
}

export default Game;