import React, { Component } from 'react'
import {connect} from "react-redux"

class Player extends Component {
    render() {
        return (
            <div className="text-center gameplayer">
                <h5 className=" text-center text1">Player</h5>
                <div className="iconKBB" >

                    <img style={{width:85,height:85}} src={this.props.mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh} alt={this.props.mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{with:120, height:120 }} src="./images/player.png" alt="./images/player.png"/>
                
                <div className="row">
                    {this.props.mangDatCuoc.map((item, index)=>{
                        //Xet gia tri cuoc
                        let border = {};
                        if(item.datCuoc){
                            border = {border:"3px solid orange"}
                        }


                        return <div className="col-4">
                        <button onClick={()=>{this.props.datCuoc(item.ma)}} style={border} className="btnIcon">
                        <img src={item.hinhAnh} alt={item.hinhAnh} />
                        </button>   
                    </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc)=>{
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)