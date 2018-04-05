import React, { Component } from 'react';
import Expander from './expanderComponent/Expander.js';
import PostList from './listComponent/PostList.js';
import Filter from './filterComponent/filter.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      postsToDisplay: 10,
      filterValue: '',
      postOnScreen: 1
    }
    this.showMore = this.showMore.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
    this.setState({filterValue: event.target.value});
  }

   showMore(){
     const {postsToDisplay} = this.state;
     this.setState({postsToDisplay: postsToDisplay+10});
   }

  render() {
    return (
      <div className="app-container">
        <Filter onChange={this.onChange}/>
        <PostList numOfPosts={this.state.postsToDisplay} filterBy={this.state.filterValue}/>
        <Expander onClick={this.showMore}/>
      </div>
     );
  }
}

export default App;
