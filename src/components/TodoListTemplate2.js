import React, { Component } from 'react';
import './TodoListTemplate.css';
import axios from 'axios';
import TimeList2 from './TimeList2';

var candi_date_parent = []
var received_parent = []

class TodoListTemplate2 extends Component {





  render() {
    return (
      <main className="todo-list-template">
        <div className="title">
            전체 스케쥴
          
        </div>
        <div>
          <TimeList2 className='center' candi_date={candi_date_parent} received={received_parent}></TimeList2>
        </div>
  
  
      </main>
    );


  }
  
}

export default TodoListTemplate2;