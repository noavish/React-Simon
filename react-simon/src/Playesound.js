import React, { Component } from 'react';
import Box from './Box'


class Playsound extends React.Component {
    constructor(props) {
        super(props);
        this.sound = {
            blue: "https://vocaroo.com/media_command.php?media=s15U0Zv8Idoj&command=download_mp3",
            green: "https://vocaroo.com/media_command.php?media=s1yvyJ3RUldc&command=download_mp3",
            red: "https://vocaroo.com/media_command.php?media=s1qE2HPb1RTy&command=download_mp3",
            yellow: "https://vocaroo.com/media_command.php?media=s1y1UJO9v1ih&command=download_mp3",
            gameover: "https://vocaroo.com/media_command.php?media=s1VWt2jMtNwI&command=download_mp3",

        }

    }

    playsound() {
        var x = document.getElementById("myID");
        x.play();
    }
    render() {
        return (
            <div>
                <audio id="myID" >
                    <source src={this.sound.green} />
                </audio>
                <div onClick={this.playsound}><Box/></div>
            </div>
        );
    }
}

export default Playsound;