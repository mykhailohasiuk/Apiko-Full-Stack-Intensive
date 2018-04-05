import React, { Component } from 'react';
import Post from '../postComponent/Post.js';
import Loader from '../loader/Loader.js';
import ZeroMatches from '../zeroMatchesComponent/ZeroMatches.js';
import './postList.css';


const API = 'https://jsonplaceholder.typicode.com';

const fetchData = entity =>
  fetch(API + entity).then(response => response.json());


class PostList extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      isLoading: true
    }
    this.formPosts = this.formPosts.bind(this);
  }

  formPosts(){
    fetchData("/posts").then(
        (posts) => {
          this.setState({
            posts,
            isLoading: false
          });
        }
      );
  }

  componentDidMount() {
    this.formPosts();
    this.fetchInterval = setInterval(() => {
    fetchData("/posts").then(
        (posts) => {
          this.setState({
            posts,
            isLoading: false
          });
        }
      );
    }, 10000);
  }

  componentWillUnmount(){
    clearInterval(this.fetchInterval);
  }

  render(){
    // console.log('render');
  const filteredPosts = this.state.posts.filter(post => post.title.includes(this.props.filterBy));

  const renderedPosts = filteredPosts.map((post, index)=>index<this.props.numOfPosts ?
  <Post title={post.title} body={post.body} key={post.id}/>
  : null);


    return(
      this.state.isLoading ? <Loader/>:
        <div className="post-list">
          {filteredPosts.length>0 ? renderedPosts : <ZeroMatches/>}
        </div>

    )
  }
}

export default PostList;
