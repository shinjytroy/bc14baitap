import React, { Component } from 'react'
import "./GameOanTuXi.css"
import Player from "./Player"
import Computer from './Computer'
import Result from './Result'

export default class GameOanTuXi extends Component {
    render() {
        return (
            <div className="gameOanTuXi">
                <h3 className=" text-center text1" style={{fontSize:50}}>GAME OÁN TÙ XÌ</h3>
                <div className="row text-center mt-2">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <Result />
                        <button className="btn btn-danger p-2 mt-4 ">Bắt đầu</button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}
