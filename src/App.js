import React, { Component } from "react";
import "./App.scss";
import Todo from './components/Todo'


class App extends Component {

  
  render() {

   
    return (
      <div className = "container">
        <h3>T O D O A P P</h3>
        <Todo/>       
      </div>
    );
  }
}

export default App;
