import React, { Component } from 'react'
import "./GameOanTuXi.css"
import Player from "./Player"
import Computer from './Computer'
import Result from './Result'
import {connect} from 'react-redux'

class GameOanTuXi extends Component {
    render() {
        return (
            <div className="gameOanTuXi">
                <h3 className=" text-center mt-2 text1" style={{fontSize:50}}>GAME OÁN TÙ XÌ</h3>
                <div className="row text-center mt-2">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <Result />
                        <button onClick={()=>{this.props.playGame()}} className="btn btn-danger p-2 mt-4 ">Bắt đầu</button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            let count = 0;
            //Khai báo hàm lập đi lập lại
            let randomComputerItem = setInterval(()=>{
                dispatch({
                    type: 'RANDOM'
                })
                count ++ ;
                if(count >= 8){
                    clearInterval(randomComputerItem)

                    dispatch({
                        type: 'END_GAME',
                    })
                }
            },100)
        }
    }
}
export default connect(null,mapDispatchToProps)(GameOanTuXi)