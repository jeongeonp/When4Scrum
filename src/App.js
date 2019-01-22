import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import TodoListTemplate2 from './components/TodoListTemplate2';
import './App.css';
import DayPicker from './components/DayPicker'
import LoginTab from './components/LoginTab'
import ConfirmTab from './components/ConfirmTab'
import SelectTable from './components/SelectTable'

var idd = "";
var datee = "";
var urll = window.location.href;

//const divStyle = { display: 'flex', alignItems: 'center' };

//const style = { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '..', height: '..'}

class App extends Component {
  //const scrumUrl="http://"
  constructor() { 
  super(); 
  this.state = { 
    id: "", 
    date: "",
    url: ""
  }; 
  
  } 

  
  onUpdate = (data) => {
    this.setState({id: data})
    console.log(this.state.id)
  };

  onUpdate2 = (data) => {
    this.setState({date: data})
    console.log(this.state.date)
  };

  onUpdate3 = (data) => {
    this.setState({url: data})
    console.log(this.state.url)
  };

  
  render() {
    idd = this.state.id
    datee = this.state.date
    urll = this.state.url
    console.log(idd + "ddd " + datee)
    return (
      <div className="vertical">
        <div className="title-template">
          When4Scrum
          
        </div>

        <div className='rowC'>

          <div className='pad'>
            <LoginTab onUpdate={this.onUpdate}></LoginTab>
            <DayPicker
              active={new Date()}
              onDayClick={(day) => this.setState({ day })}
              onUpdate={this.onUpdate2}
            />
            <SelectTable id={idd} date={datee} onUpdate={this.onUpdate3}></SelectTable>
            {window.location.href}{urll}
            
            
            
            <ConfirmTab></ConfirmTab>
            
          </div>
          <TodoListTemplate id={idd} url={urll}></TodoListTemplate>
          <TodoListTemplate2 id={idd} url={urll}></TodoListTemplate2>
            
        </div>
    </div>
      
    );
  }
}

export default App;