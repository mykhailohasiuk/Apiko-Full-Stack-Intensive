import React, { Component } from 'react';
import Expander from './expanderComponent/Expander.js'
import PostList from './listComponent/PostList.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      postsToDisplay: 10
    }
    this.showMore = this.showMore.bind(this);
  }

   showMore(){
     const {postsToDisplay} = this.state;
     this.setState({postsToDisplay: postsToDisplay+10});
   }

  render() {
    return (
      <div className="app-container">
        <PostList numofposts={this.state.postsToDisplay}/>
        <Expander onClick={this.showMore}/>
      </div>
     );
  }
}

export default App;
