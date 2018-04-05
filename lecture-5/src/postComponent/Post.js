import React, { Component } from 'react';
import './singlePost.css';

class Post extends Component {

  shouldComponentUpdate(nextProps, nextState){
    // console.log(`shouldComponentUpdate ${(this.props.title !== nextProps.title) || (this.props.body !== nextProps.body)}`);
    return ((this.props.title !== nextProps.title) || (this.props.body !== nextProps.body));
  }


  render(){
    // console.log('item rendered');
    return(
      <div className="single-post">
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    )
  }
}

export default Post;
