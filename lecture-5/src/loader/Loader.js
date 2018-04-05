import React, {Component} from 'react';
import './loader.css';

class Loader extends Component {

  render(){
    return(
    <div className="load-wrapp">
      <div className="load-5">
        <div className="ring-2">
          <div className="ball-holder">
            <div className="ball"></div>
          </div>
        </div>
        <p>Loading...</p>
      </div>
    </div>
  );
  }
}

export default Loader;
