import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentApp from './CommentApp';
import Clock from './Clock'
import * as serviceWorker from './serviceWorker';


class Index extends Component {
    constructor() {
        super()
        this.state = {
            isShowClock: true
        }
    }
    handleShowOrHide(){
        this.setState({
            isShowClock:!this.state.isShowClock
        })
    }
    render() {
        return (
            <div>
                {this.state.isShowClock ? <Clock /> :null}
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或者隐藏时钟
                </button>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
