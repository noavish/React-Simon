import React, { Component } from 'react';
import './App.css';
import Box from './Box.js'

class Game extends Component {
    constructor(props){
        super(props);
        this.state = ({colors: [{id: 1, color:'green'}, {id: 2, color:'blue'}, {id: 3, color:'yellow'}, {id: 4, color:'red'}]});
    }

    createBoxes() {
        return this.state.colors.map((color, index)=>{
            return <Box key={index+1} colorIndex={index+1} className={color} />
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