import React, { Component } from 'react';
import Time from './Time';

class TimeList extends Component {
  render() {
    //const { todos, onToggle, onRemove } = this.props;

    return (
      <div className='center'>
        <Time text="10:00"/>
        <Time text="11:00"/>
        <Time text="12:00"/> 
        <Time text="13:00"/>
        <Time text="14:00"/>
        <Time text="15:00"/>  
        <Time text="16:00"/>
        <Time text="17:00"/>
        <Time text="18:00"/>
        <Time text="19:00"/>
        <Time text="20:00"/>
        <Time text="21:00"/>  
        <Time text="22:00"/>
        <Time text="23:00"/>
        <Time text="24:00"/>         
      </div>
    );
  }
}

export default TimeList;