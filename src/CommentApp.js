import React, { Component } from 'react';
import CommentList from './CommentList'
import CommentInput from './CoomentInput'


// 总结一下：当某个状态被多个组件依赖或者影响的时候，就把该状态提升到这些组件的最近公共父组件中去管理，
// 用 props 传递数据或者函数来管理这种依赖或着影响的行为

class CommnetApp extends Component {

  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  handleSubmitCommnet(comment) {
    console.log(comment)
    this.state.comments.push(comment)
    console.log(this.state.comments)
    this.setState({
      comments: this.state.comments
    })
  }

  render() {
    return (
      <div className='wrapper'>
        {/* onSubmit和 comments是父组件给子组件传递的属性，子组件可以通过props获取
            这种子组件通过父组件进行数据传递的方式叫做状态提升
        */}
        <CommentInput onSubmit={this.handleSubmitCommnet.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommnetApp;
