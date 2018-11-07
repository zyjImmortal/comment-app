import React, { Component } from 'react';
import CommentList from './CommentList'
import CommentInput from './CoomentInput'


class CommnetApp extends Component {
  
  handleSubmitCommnet(comment){
    console.log(comment)
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitCommnet.bind(this)}/>
        <CommentList />
      </div>
    );
  }
}

export default CommnetApp;
