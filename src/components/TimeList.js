import React, { Component } from 'react';
import Time from './Time';

class TimeList extends Component {
  


  render() {
    var candi_date = [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var first = candi_date.indexOf(1)/2;
    var last = candi_date.lastIndexOf(1)/2;
    var rows = [];
    for (var i=first; i<last; i++) {
      rows.push(<Time key={i} text={i + ":00"}/>)
      rows.push(<Time key={i} text={i + ":30"}/>)
    }
    

    return (
      <div className='center' onClick={(e)=>{e.preventDefault(); console.log("123")}} id="main">
        {rows}

         
      </div>
    );
  }
}

export default TimeList;