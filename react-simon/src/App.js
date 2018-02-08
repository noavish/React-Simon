import React, { Component } from 'react';
import './App.css';
import Game from './Game.js'
import Playsound from './Playesound'

class App extends Component {
    constructor(props){
        super(props);
        this.state = ({score: 0});
        this.updateScore = this.updateScore.bind(this);
    }

    updateScore(){
        this.setState({score: this.state.score+1}, ()=> {
            console.log(`score: ${this.state.score}`);
        });

    }

    render() {
        return (
          <div className="App">
              <h3>{this.state.score}</h3>
              <Game updateScore={this.updateScore}/>
              <button type='button' className='startGame '> Start playing </button>
          </div>
        );
    }
}

export default App;
