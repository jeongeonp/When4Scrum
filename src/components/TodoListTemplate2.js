import React, { Component } from 'react';
import './TodoListTemplate2.css';
// ES2015 module syntax
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
//import '@progress/kendo-theme-default/dist/all.css';
//import '@progress/kendo-theme-bootstrap/dist/all.css';
import '@progress/kendo-theme-material/dist/all.css';
//import '@progress/kendo-ui';


class TodoListTemplate2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{
        "fruit": "Apple"
      },
      {
        "fruit": "Apple1"
      },
      {
        "fruit": "Banana"
      },
      {
        "fruit": "Time"
      },
      {
        "fruit": "good"
      },
      {
        "fruit": "IDK"
      },
      {
        "fruit": "Help"
      },
      {
        "fruit": "a"
      },
      {
        "fruit": "b"
      },
      {
        "fruit": "c"
      },
      {
        "fruit": "d"
      },
      {
        "fruit": "e"
      },
      {
        "fruit": "f"
      },
      {
        "fruit": "g"
      },
      {
        "fruit": "h"
      }
    
    ]
    }
  };

  render() {
    return (
      <main className="todo-list-template2">
        <div className="title">
            전체 스케쥴
          
        </div>
        <Grid data={this.state.data}
        style={{maxHeight: '500px'}}>
          <Column field='fruit' title='hihi' className="trial2"/>
          
          
        </Grid>
      </main>
    );



  }
}

export default TodoListTemplate2;