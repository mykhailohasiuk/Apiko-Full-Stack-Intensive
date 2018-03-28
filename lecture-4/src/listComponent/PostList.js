import React, { Component } from 'react';
import Post from '../postComponent/Post.js';
import posts from '../models/posts.json';
import ZeroMatches from '../zeroMatchesComponent/ZeroMatches.js'
import './postList.css'

class PostList extends Component {
  render(){

  const filteredPosts = posts.filter(post => post.title.includes(this.props.filterBy));

  const renderedPosts = filteredPosts.map((post, index)=>index<this.props.numOfPosts ?
  <Post title={post.title} body={post.body} key={post.id}/>
  : null);


    return(
      <div className="post-list">
        {filteredPosts.length>0 ? renderedPosts : <ZeroMatches/>}
      </div>
    )
  }
}

export default PostList;
