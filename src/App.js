import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import TodoListTemplate2 from './components/TodoListTemplate2';
import './App.css';
import DayPicker from './components/DayPicker'
import LoginTab from './components/LoginTab'
import ConfirmTab from './components/ConfirmTab'
import SelectTable from './components/SelectTable'



//const divStyle = { display: 'flex', alignItems: 'center' };

//const style = { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '..', height: '..'}

class App extends Component {
  
  
  render() {
    return (
      <div className="vertical">
        <div className="title-template">
          When4Scrum
        </div>

        <div className='rowC'>

          <div className='pad'>
            <LoginTab></LoginTab>
            <DayPicker
              active={new Date()}
              onDayClick={(day) => this.setState({ day })}
            />
            <SelectTable></SelectTable>
            <ConfirmTab></ConfirmTab>

          </div>
          <TodoListTemplate></TodoListTemplate>
          <TodoListTemplate2></TodoListTemplate2>
            
        </div>
    </div>
      
    );
  }
}

export default App;