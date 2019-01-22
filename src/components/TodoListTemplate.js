import React, { Component } from 'react';
import './TodoListTemplate.css';
import Time from './Time';
import TimeList from './TimeList';

var idd = "";
var urll = "";

class TodoListTemplate extends Component {
  constructor (props) {
    super(props)
    this.state = {
        id: "",
        
        url: ""
    }
  }

  componentWillMount(){
    this.state.url = this.props.url
    this.state.id = this.props.id
    idd = this.state.id
    urll = this.state.url
    console.log(this.props.url + "RECEIVED URL")
    console.log(idd + " id " + urll + ' url')
  }
    
    render() {
      this.state.url = this.props.url
      this.state.id = this.props.id
      idd = this.state.id
      urll = this.state.url
      console.log(this.props.url + "RECEIVED URL")
      console.log(idd + " id " + urll + ' url')
      
      return (
        <main className="todo-list-template">
          <div className="title">
              내 스케쥴
            
          </div>
          <div>
            <TimeList className='center' id={idd} url={urll}>
            
            </TimeList>
          </div>
    
    
        </main>
      );

    }
  
}

export default TodoListTemplate;