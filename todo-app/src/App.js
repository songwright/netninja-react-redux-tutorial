import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todo: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  render () {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
      </div>
    );
  }
}

export default App;
