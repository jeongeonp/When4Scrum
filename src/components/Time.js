import React, { Component } from 'react';
import './Time.css';

class Time extends Component {
  render() {
    //const { text, checked, id, onToggle, onRemove } = this.props;
    const {text} = this.props;

    return (
      <div className="todo-item">
        {text}
      </div>
    );
  }
}

export default Time;