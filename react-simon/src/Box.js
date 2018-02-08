import React, { Component } from 'react';
import './App.css';

class Box extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div className="boxes">
                <div className={this.props.className} color={this.props.color}></div>
            </div>
        );
    }
}

export default Box;