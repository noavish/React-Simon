import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js'
import Playsound from './Playesound'

class App extends Component {
    constructor(props){
        super(props);
        this.state = ({score: 0});
    }

    render() {
        return (
          <div className="App">
              <h3>{this.state.score}</h3>
              <Game />
              <button type='button' className='startGame '> Start playing </button>
              <Playsound/>
          </div>
        );
    }
}

export default App;
