import React, { Component } from 'react';
import Time from './Time';

class TimeList extends Component {
  


  render() {
    var rows = [];
    for (var i=0; i<10; i++) {
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