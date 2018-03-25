import React, { Component } from 'react';
import Post from '../postComponent/Post.js';
import posts from '../models/posts.json';
import './postList.css'

class PostList extends Component {

  render(){

    const renderedPosts = posts.map((post, index)=>index<this.props.numofposts ?
    <Post title={post.title} body={post.body} key={post.id}/>
    : null);

    return(
      <div className="post-list">
        {renderedPosts}
      </div>
    )
  }
}

export default PostList;
