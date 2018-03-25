import React, { Component } from 'react';
import './singlePost.css';

class Post extends Component {
  render(){
    return(
      <div className="single-post">
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    )
  }
}

export default Post;
