import React, { Component } from 'react'

export default class Computer extends Component {
    render() {
        return (
            <div className="text-center gameplayer">
                <h5 className=" text-center text1">Computer</h5>
                <div className="iconKBB" >
                    <img style={{width:85,height:85}} src="./images/keo.png" alt="./images/keo.png" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{with:120, height:120 }} src="./images/playerComputer.png" alt="./images/playerComputer.png"/>
            </div>
        )
    }
}
