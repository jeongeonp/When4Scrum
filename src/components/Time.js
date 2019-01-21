import React, { Component } from 'react';
import './Time.css';

const first = '#FFFFFF';
const clicked = '#AAF0D1';

class Time extends Component {
  constructor() {
  	super();
    this.state = {color: first, colored: true};
  }

  
  changeColor() {
    this.setState({colored: !this.state.colored})
  }
  

  render() {
    let bgColor = this.state.colored ? first : clicked
    const {text} = this.props;

    return (
    
      <div className="todo-item" onClick={this.changeColor.bind(this)} style={{background: bgColor}}>
        <div className="trial">
          {text}
        </div>
        
      </div>
      
      
    );
  }
}

export default Time;