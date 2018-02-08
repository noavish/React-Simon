import React, { Component } from 'react';
import './App.css';
import Boxes from './Boxes.js'


class Game extends Component {
    constructor(props){
        super(props);
        this.startGame = this.startGame.bind(this);
        this.playerClicked = this.playerClicked.bind(this);
        this.state = ({sequence:[], userChoose: []});
    }

    computreTurn(sequence) {
        for (var i = 0; i < sequence.length; i++) {
            alert(sequence[i]);
        }
    }

    playerTurn(sequence) {
        for (var i = 0; i < sequence.length; i++) {
            // var choise =
            // if (choise!= sequence[i]){
            //     return false;
            // }
        }
        return true;
    }

    playerClicked(e){
        let choise = e.target.dataset.id;
        this.setState({userChoose: this.state.userChoose.concat(choise)}, ()=> {
            console.log(this.state.userChoose);
        });
    }


    startGame(e) {
        // var sequence = [];
        // var score=0;

            // for (var i = 0; i < 2; i++) {
            var rand = Math.ceil(Math.random() * 4); //adiing random between 1-4 to sequence
            this.setState({sequence: this.state.sequence.concat(rand)}, ()=> {
               console.log(this.state.sequence);
            });
            // sequence = sequence.concat(rand);
            // this.computreTurn(sequence);
            // var result = this.playerTurn(sequence, e);
            // if (result == false) {
            //     alert("game over");
            //     return;
            // }
            // score++;
        // }

        // console.log("you won")
    }

    render() {
        return (
            <div className="game">
                <Boxes playerClicked={this.playerClicked}/>
                <button type='button' className='startGame' onClick={this.startGame} > Start playing </button>
            </div>
        );
    }
}

export default Game;