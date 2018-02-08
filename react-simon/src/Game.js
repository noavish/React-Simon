import React, { Component } from 'react';
import './App.css';
import Boxes from './Boxes.js'


class Game extends Component {
    constructor(props){
        super(props);
        this.startGame = this.startGame.bind(this);
        this.playerClicked = this.playerClicked.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.state = ({sequence:[], userChoose: []});
    }
    playerClicked(e){
        let choise = e.target.dataset.id;
        this.setState({userChoose: this.state.userChoose.concat(choise)}, ()=> {
            console.log(`userChoose ${this.state.userChoose}`);
            if (this.state.sequence.length === this.state.userChoose.length) {
                if (this.state.sequence[this.state.sequence.length-1] !== parseInt(this.state.userChoose[this.state.userChoose.length-1])) {
                    alert('Game Over!');
                } else {
                    this.props.updateScore();
                    this.startGame();
                }
            }
        });

    }

    restartGame(){
        console.log(this.props)
        this.setState({sequence:[]}, ()=> {
           
        });
        this.setState({userChoose:[]}, ()=> {
            console.log(this.state)
        });
        this.props.clearScore();
    }


    startGame() {
        var rand = Math.ceil(Math.random() * 4); //adiing random between 1-4 to sequence
        this.setState({sequence: this.state.sequence.concat(rand)}, ()=> {
           console.log(`computerChoose ${this.state.sequence}`);
            this.setState({userChoose: []}, ()=> {
                console.log(this.state)
            });
        });
    }

    render() {
      
        return (
            <div className="game">
                <Boxes playerClicked={this.playerClicked}/>
                <button type='button' className='startGame' onClick={this.startGame} > Start playing </button>
                <button type='button' className='restartGame'  onClick={this.restartGame} > Restart Game </button>
            </div>
        );
    }
}

export default Game;