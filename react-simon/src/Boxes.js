import React, { Component } from 'react';
import './App.css';
import Box from './Box.js'

class Game extends Component {
    constructor(props){
        super(props);
        this.state = ({colors: ['green', 'blue', 'yellow', 'green']});
    }

    createBoxes() {
        return this.state.colors.map((color, index)=>{
            return <Box key={index+1} colorIndex={index+1} className={color} />
        });
    }

    render() {
        return (
            <div className="game">
                {this.createBoxes()}
                {/*<Box className='box green' color='green' data-id="1"></Box>*/}
                {/*<Box className='box blue' color='blue' data-id="2"></Box>*/}
                {/*<Box className='box yellow' color='yellow' data-id="3"></Box>*/}
                {/*<Box className='box red' color='red' data-id="4"></Box>*/}
            </div>
        );
    }
}

export default Game;