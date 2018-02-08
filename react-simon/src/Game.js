import React, { Component } from 'react';
import './App.css';
import Boxes from './Boxes.js'


class Game extends Component {
    constructor(props){
        super(props);
        this.startGame = this.startGame.bind(this);
    }

    computreTurn(sequence) {
        for (var i = 0; i < sequence.length; i++) {
            alert(sequence[i]);
        }
    }

    playerTurn(sequence) {
        for (var i = 0; i < sequence.length; i++) {
            var choise=prompt("enter the right number");
            if (choise!= sequence[i]){
                return false;
            }
        }
        return true;
    }

    startGame() {
        var sequence = [];
        var score=0;

            for (var i = 0; i < 2; i++) {
            var rand = Math.ceil(Math.random() * 4); //adiing random between 1-4 to sequence
            sequence = sequence.concat(rand);
            this.computreTurn(sequence);
            var result = this.playerTurn(sequence);
            if (result == false) {
                alert("game over");
                return;
            }
            score++;
        }

        console.log("you won")
    }

    render() {
        return (
            <div className="game">
                <Boxes />
                <button type='button' className='startGame' onClick={this.startGame}> Start playing </button>
            </div>
        );
    }
}

export default Game;