import React, { Component } from 'react';
import './App.css';

class Box extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="boxes">
               <button type='button' className={this.props.className} color={this.props.color}></button>
            </div>
        );
    }
}

export default Box;