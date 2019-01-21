import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import TodoListTemplate2 from './components/TodoListTemplate2';
import './App.css';
import Calendar from './components/Calendar'
import LoginTab from './components/LoginTab'
import ConfirmTab from './components/ConfirmTab'



const divStyle = {
  display: 'flex',
  alignItems: 'center'
};

const style = { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '..', height: '..'}

class App extends Component {
  
  
  render() {
    return (
      <div className="vertical">
        <div className="title-template">
          When2Scrum
        </div>

        <div className='rowC'>

          <div className='pad'>
            <LoginTab></LoginTab>
            <Calendar></Calendar>
            <ConfirmTab></ConfirmTab>


          </div>

          
            <TodoListTemplate form = "times picked">
              text
            </TodoListTemplate>
          
          
            <TodoListTemplate2 form = "times selected">
              second
            </TodoListTemplate2>
          
            
        </div>

    </div>
      
    );
  }
}

export default App;