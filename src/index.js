import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentApp from './CommentApp';
import Clock from './Clock'
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types'

// 组件的挂载指的是将组件渲染并且构造 DOM 元素然后插入页面的过程。这是一个从无到有的过程，
// React.js 提供一些生命周期函数可以给我们在这个过程中做一些操作。
class Index extends Component {
    constructor() {
        super()
        this.state = {
            isShowClock: PropTypes.bool   // PropTypes限制参数类型，对参数进行验证
        }
    }
    handleShowOrHide() {
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }
    render() {
        return (
            <div>
                {this.state.isShowClock ? <Clock /> : null}
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或者隐藏时钟
                </button>
            </div>
        )
    }
}

class Card extends Component {
    
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    {/* {this.props.content} */}
                    {this.props.children}
                    
                    {/* this.props.children获取传入的内容，返回的是一个数组 */}
                </div>

            </div>
        )
    }
}

// ReactDOM.render(
//     // <Card content={
//     //     <div>
//     //         <h2>React.js 小书</h2>
//     //    <div>开源、免费、专业、简单</div>
//     //   订阅：<input />
//     //     </div>
//     // }/>,
//     <Card>
//         <div>
//             {/* style以一个对象的形式传入 */}
//             <h2 style={{fontSize: '12px', color: 'red'}}>React.js 小书</h2>
//             <div>开源、免费、专业、简单</div>
//             订阅：<input />
//         </div>
//     </Card>,

//     document.getElementById('root')
// )

ReactDOM.render(<CommentApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
