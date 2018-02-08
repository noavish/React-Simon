import React, { Component } from 'react';
import './App.css';
import Playsound from './Playesound'

class Box extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className={this.props.item.className} color={this.props.item.color}
             data-id={this.props.item.colorIndex} onClick={this.props.playerClicked}>
              <Playsound className={this.props.item} />
            </div>
        );
    }
}

export default Box;