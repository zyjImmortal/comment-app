import React, { Component } from 'react';


class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }

    handleUserNameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit() {
        // onSubmit是父组件传入的属性,是一个回调函数，当子组件获取到输入的内容时，通过它传递给父组件
        if (this.props.onSubmit) {
            const {username, content} = this.state
            this.props.onSubmit({username, content})
        }
        this.setState({content:''})
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-filed-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username}
                            onChange={this.handleUserNameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-filed-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content}
                            onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button' onClick={this.handleSubmit.bind(this)}>
                    <button>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput