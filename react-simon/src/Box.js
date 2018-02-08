import React, { Component } from 'react';
import './App.css';

class Box extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="boxes">
                <div idName={this.props.className} color={this.props.color}></div>
            </div>
        );
    }
}

export default Box;