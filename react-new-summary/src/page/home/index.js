import React, { Component } from 'react'
import Header from '../../component/header'
import '../../common/css/word.css'

class Home extends Component {
    render() {
        return (
            <div className="Word-header">
                <Header param="home的"/>
                <h1>Home page</h1>
                {/* 🌈：按钮点击传参的三种方式 */}
                <button onClick={()=>this.gotoHome1('/hooks')}>1--hooks示例</button>
                <button onClick={this.gotoHome1.bind(this,'/classes')}>2--classes示例</button>
                <button onClick={e=>this.gotoHome2(e,'/welcome')}>3--redux示例</button>
                <button onClick={e=>this.gotoHome2(e,'/welcome')}>4--ant design示例</button>
                <button onClick={e=>this.gotoHome2(e,'/h5AndApp')}>5--跳转h5和app</button>
                <button onClick={e=>this.gotoHome2(e,'/crossDomain')}>6--跨域</button>
                <button onClick={e=>this.gotoHome2(e,'/networkRequest')}>7--网络</button>
                <button onClick={e=>this.gotoHome2(e,'/dataPersistence')}>8--持久化</button>
            </div>
        )
    }
    gotoHome1=(a)=> {
        console.log(a)
        this.props.history.push(a)
    }
    gotoHome2=(e,a)=> {
        console.log(a)
        this.props.history.push(a)
    }
}

export default Home