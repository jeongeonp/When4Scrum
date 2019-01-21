import React, { Component } from 'react';
import './TodoListTemplate.css';
import Time from './Time';
import TimeList2 from './TimeList2';



const TodoListTemplate = ({form, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
          전체 스케쥴
        
      </div>
      <div>
        <TimeList2 className='center'></TimeList2>
      </div>


    </main>
  );
};

export default TodoListTemplate;