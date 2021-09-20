import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div className="text-center gameplayer">
                <h5 className=" text-center text1">Player</h5>
                <div className="iconKBB" >
                    <img style={{width:85,height:85}} src="./images/keo.png" alt="./images/keo.png" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{with:120, height:120 }} src="./images/player.png" alt="./images/player.png"/>
                <div className="row">
                    <div className="col-4">
                        <button className="btnIcon">
                        <img src="./images/keo.png" alt="./images/keo.png" />
                        </button>   
                    </div>
                    <div className="col-4">
                        <button className="btnIcon">
                        <img src="./images/bua.png" alt="./images/bua.png" />
                        </button>     
                    </div>
                    <div className="col-4">
                        <button className="btnIcon">
                        <img src="./images/bao.png" alt="./images/bao.png" />
                        </button>  
                    </div>
                </div>
            </div>
        )
    }
}
