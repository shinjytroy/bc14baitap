import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">Thua rồi !! Làm ván nữa !</div>
                <div className="display-4 text-success">Số trận thắng: <span className="text-warning">0</span></div>
                <div className="display-4 text-success">Tổng số trận: <span className="text-warning">0</span></div>
            </div>
        )
    }
}
