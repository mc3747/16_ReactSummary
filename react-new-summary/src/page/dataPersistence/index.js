import React, { Component } from 'react'

/*
组件传值
*/ 
export default class DataPersistence extends Component {
    render() {
        return (
            <div >
                <button onClick={()=>this.gotoHome('/callAppLib')}>数据持久化</button>

            </div>
        )
    }
    gotoHome=(a)=> {
        console.log(a)
        this.props.history.push(a)
    }
}