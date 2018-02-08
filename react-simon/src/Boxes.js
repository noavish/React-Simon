import React, { Component } from 'react';
import './App.css';
import Box from './Box.js'
import Item from './models.js'

class Game extends Component {
    constructor(props){
        super(props);

        this.state = ({colors: [new Item('green','green',"https://vocaroo.com/media_command.php?media=s15U0Zv8Idoj&command=download_mp3" )
        ,new Item('blue','blue',"https://vocaroo.com/media_command.php?media=s15U0Zv8Idoj&command=download_mp3" ),
        new Item('red','red',"https://vocaroo.com/media_command.php?media=s15U0Zv8Idoj&command=download_mp3" ),
        new Item('yellow','yellow',"https://vocaroo.com/media_command.php?media=s15U0Zv8Idoj&command=download_mp3" )]});
    }

    createBoxes() {
        return this.state.colors.map((color, index)=>{
            return <Box key={index+1} colorIndex={index+1} item={color} playerClicked={this.props.playerClicked}/>

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