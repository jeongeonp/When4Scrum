import React, { Component } from 'react';
import './Time2.css';


const receivedColor = '#AAF0D1';
//const colour = '#FFFFFF';

class Time2 extends Component {
  constructor() {
  	super();
    //this.state = {color: receivedColor, color2: colour};
  }

  render() {
    const {text} = this.props;
    const {colour} = this.props;
    //var colour;
    
    return (
      
      <div className="todo-item" style={{background: colour}}>
        <div className="trial">
          {text}
          
        </div>
        
      </div>
      
      
    );
  }
}

export default Time2;