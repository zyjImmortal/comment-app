import React, { Component } from 'react';
import CommentList from './CommentList'
import CommentInput from './CoomentInput'


class CommnetApp extends Component {

  constructor(){
    super()
    this.state = {
      comments:[]
    }
  }

  handleSubmitCommnet(comment){
    console.log(comment)
    this.state.comments.push(comment)
    console.log(this.state.comments)
    this.setState({
      comments:this.state.comments
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitCommnet.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

export default CommnetApp;
