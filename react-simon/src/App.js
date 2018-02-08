import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js'

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
          </div>
        );
    }
}

export default App;
