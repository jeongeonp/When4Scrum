import React, { Component } from 'react';
import './Time.css';

const first = '#FFFFFF';
const clicked = '#96c8e6';
var selected = [0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0];

class Time extends Component {
  constructor(props) {
  	super(props);
    this.state = {color: first, colored: true};
    
  }
  
  
  render() {
    let bgColor = this.state.colored ? first : clicked;
    const {text} = this.props;
    
    const changeColor=() => {
      this.setState({colored: !this.state.colored});
      console.log(text);

      const timeIndex = ["0:00","0:30", "1:00","1:30", "2:00","2:30", "3:00","3:30", "4:00","4:30", "5:00","5:30", "6:00","6:30", "7:00","7:30", "8:00","8:30",
        "9:00","9:30", "10:00","10:30", "11:00","11:30", "12:00","12:30", "13:00","13:30", "14:00","14:30", "15:00","15:30", "16:00","16:30", "17:00","17:30",
        "18:00","18:30", "19:00","19:30", "20:00","20:30", "21:00","21:30", "22:00","22:30", "23:00","23:30"]
      
      var indexOfText =timeIndex.indexOf(text) 
      

      selected[indexOfText]==0 ? selected[indexOfText]=1 : selected[indexOfText]=0
      //console.log(selected)

      this.props.onUpdate(selected)
      console.log("INDEX IS BEING CALLED")
    }

    return (
    
      <div className="todo-item" onClick={changeColor.bind(this)} style={{background: bgColor}}>
        <div className="trial">
          {text}
        </div>
        
      </div>
      
      
    );
  }
}

export default Time;