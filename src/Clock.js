import React, { Component } from 'react';


class Clock extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    // componentWillMount生命周期函数，在组件挂载之前执行
    componentWillMount() {
        // 设置一个定时器
        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }

    // 在组件销毁时执行
    componentWillUnmount() {
        // 清除定时器，如果没有这个在销毁组件后的额外操作，在销毁组件后定时器的回调函数还在执行，会导致严重的内存泄漏
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

export default Clock