import React, { Component } from 'react';
import './expander.css';


class Expander extends Component {
  render(){
    return (
      <div className="expander-container">
        <button className="expander" onClick={this.props.onClick}>More...</button>
      </div>
  )}
}

export default Expander;
