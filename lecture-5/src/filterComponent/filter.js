import React, { Component } from 'react';
import './filter.css'

class Filter extends Component {

    render(){
      return(
      <div className="filter-container">
        <input type="text" className="filter-input" placeholder="Type what you are looking for..."
          onChange={this.props.onChange} />
      </div>
    );}
}

export default Filter;
