import React, { Component } from 'react';
import './TodoListTemplate.css';
import Time from './Time';
import TimeList from './TimeList';



const TodoListTemplate = ({form, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
          내 스케쥴
        
      </div>
      <div>
        <TimeList className='center'></TimeList>
      </div>


    </main>
  );
};

export default TodoListTemplate;