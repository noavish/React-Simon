import React, { Component } from 'react';



class Playsound extends React.Component {
    constructor(props) {
        super(props);

    }

    playsound() {
        var x = document.getElementById("myID");
        x.play();
    }
    render() {
        return (
            <div className="play-sound">
                <audio id="myID" >
                <source src={this.props.className} />
                </audio>
                <div onClick={this.playsound}></div>
            </div>
        );
    }
}

export default Playsound;