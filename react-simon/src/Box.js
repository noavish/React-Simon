import React, { Component } from 'react';
import './App.css';

class Box extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div idname={this.props.idname} color={this.props.color} index={this.props.colorIndex}></div>

        );
    }
}

export default Box;