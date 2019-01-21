import React, { Component } from 'react';
import './TodoListTemplate2.css';
// ES2015 module syntax
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

//import '@progress/kendo-ui';

import {todolist} from './TodoList';


class TodoListTemplate2 extends Component {
  
  state = {
    data: todolist.map((item) => Object.assign({ inEdit: true }, item))
  }
  
  render() {
    return (
      <main className="todo-list-template2">
        <div className="title">
            전체 스케쥴
          
        </div>
       
      </main>
    );
  }

  itemChange = (e) => {
    e.dataItem[e.field] = e.value;
    this.setState({
        data: [ ...this.state.data ]
    });
};

}

export default TodoListTemplate2;