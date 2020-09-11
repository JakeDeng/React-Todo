import React from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends React.Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Todo1',
        completed: false
      },
      {
        id: 2,
        title: 'Todo2',
        completed: false
      },
      {
        id: 3,
        title: 'Todo3',
        completed: false
      }
    ]
  }

  render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
