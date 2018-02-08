import React, { Component } from 'react';
import './App.css';
import Boxes from './Boxes.js'


class Game extends Component {
    constructor(props) {
        super(props);
        this.startGame = this.startGame.bind(this);
        this.playerClicked = this.playerClicked.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.blink = this.blink.bind(this)
        this.state = ({ sequence: [], userChoose: [], colors: ['green', 'blue', 'yellow', 'red'], rColors: ['green', 'blue', 'yellow', 'red'], blinkColors: ['green green-blink', 'blue blue-blink', 'yellow yellow-blink', 'red red-blink'] });
    }

    playerClicked(e) {
        console.log(e)
        let choise = e.target.dataset.id;
        this.setState({ userChoose: this.state.userChoose.concat(choise) }, () => {
            console.log(`userChoose ${this.state.userChoose}`);
            if (this.state.sequence.length == this.state.userChoose.length) {
                if (this.state.sequence[this.state.sequence.length - 1] != parseInt(this.state.userChoose[this.state.userChoose.length - 1])) {
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


    blink(sequence) {
        for (var i = 0; i < sequence.length; i++) {
            var flag=0;
            this.state.colors.map((color, j) => {
                if(j+1==sequence[i]){
                    return setTimeout( () => {this.state.blinkColors[j]},3000);
                }
                else return color;
            })
            if (flag==1){// return to regular class
                this.state.colors.map((color, j) => {
                    var flage=0;
                    if(j+1==sequence[i]){
                        return this.state.rColors[j]; 
                    }
                    else return color;
                })
            }
        }

    }


    startGame() {
        var rand = Math.ceil(Math.random() * 4); //adiing random between 1-4 to sequence
        this.setState({ sequence: this.state.sequence.concat(rand) }, () => {
            this.blink(this.state.sequence);
            console.log(`computerChoose ${this.state.sequence}`);
            this.setState({ userChoose: [] }, () => {
                console.log(this.state)
            });
        });
    }

    render() {
    //   console.log(this.state.sequence)
        return (
            <div className="game">
                <Boxes playerClicked={this.playerClicked} colors={this.state.colors} />
                <button type='button' className='startGame' onClick={this.startGame} > Start playing </button>
                <button type='button' className='restartGame'  onClick={this.restartGame} > Restart Game </button>
            </div>
        );
    }
}

export default Game;