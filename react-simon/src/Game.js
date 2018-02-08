import React, { Component } from 'react';
import './App.css';
import Boxes from './Boxes.js'


class Game extends Component {
    constructor(props){
        super(props);
        this.state = ({sequence: []})
    }

    render() {
        return (
            <div className="game">
                <Boxes />
                {/*<Box className='box green' color='green' data-id="1"></Box>*/}
                {/*<Box className='box blue' color='blue' data-id="2"></Box>*/}
                {/*<Box className='box yellow' color='yellow' data-id="3"></Box>*/}
                {/*<Box className='box red' color='red' data-id="4"></Box>*/}
            </div>
        );
    }
}

export default Game;