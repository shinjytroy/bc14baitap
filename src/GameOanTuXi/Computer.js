import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
        let keyframe = `
            @keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0px;}
          }`
        return (
            <div className="text-center gameplayer">
                <style>
                {keyframe}
                </style>
                <h5 className=" text-center text1">Computer</h5>
                <div className="iconKBB" style={{position: 'relative'}} >
                    <img style={{position: 'absolute', left: '20%', animation:`randomItem${Date.now()} 0.5s`,width:85,height:85}} src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{with:120, height:120 }} src={"./images/playerComputer.png"} alt="./images/playerComputer.png"/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        computer: state.BaiTapOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps,null)(Computer)