import React from 'react';
import './Calendar.css';
import DayPicker from './DayPicker'

const TodoListTemplate = ({form, children}) => {
  return (
    <main className="calendar-template">
      <DayPicker
        active={new Date()}
        //onDayClick={(day) => this.setState({ day })}
      />
    </main>
  );
};

export default TodoListTemplate;