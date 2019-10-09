import React, { Component } from "react";
import CompletedToDo from "./CompletedToDo";
import todo from '../data/data'
import Checkbox from "@material-ui/core/Checkbox";
let temp

class Todo extends Component {
  state = {
    dataSource: todo,
    newTodo: "",
    completedTodo: []
  };

  addNewTodo = () => {
    temp = this.state.dataSource;    

    temp.push({ item: this.state.newTodo });

    console.log("todo added.", this.state.newTodo);

    this.setState({ dataSource: temp, newTodo: "" });

  
  };

  addCompletedTodoBack = item => {
    temp = this.state.dataSource;   
    temp.push({item});
    this.setState({ dataSource: temp });
    console.log("completed todo added back to todoList.", item);
  };

  deleteHandler = index => {
    temp = this.state.dataSource;

    temp.splice(index, 1);
    console.log("todo deleted.", temp);
    this.setState({ dataSource: temp });
  };

  handleCompletedTodo = (item, index) => {
    temp = this.state.dataSource;

    let completedTodo = this.state.completedTodo;

    completedTodo.push({ item });

    temp.splice(index, 1);

    this.setState({ dataSource: temp, completedTodo });

    console.log("Todo completed.", item);
  };

  showTodos = () => {
    return this.state.dataSource.map((item, i) => {
      return (
        <div
          style={{
            marginTop: 5,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
          className="card"
          key={i}
        >
          <div>
            <Checkbox
              checked={false}
              onChange={() => this.handleCompletedTodo(item.item, i)}
            />
            <button
              className="btn btn-light"
              onClick={() => this.handleCompletedTodo(item.item, i)}
            >
              {item.item}
            </button>
          </div>
          <button
            className="btn btn-light"
            onClick={() => this.deleteHandler(i)}
          >
            x
          </button>
        </div>
      );
    });
  };

  showSubmitButton = () => {
    if (this.state.newTodo.length > 0) {
      return (
        <input
          style={{ marginTop: 5 }}
          className="btn btn-primary btn-block"
          onClick={() => this.addNewTodo()}
          type="submit"
          value="Save"
        />
      );
    }
  };

  handleChange = event => {
    this.setState({ newTodo: event.target.value });
  };

  render() {
    
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>To-do</p>
        <div>{this.showTodos()}</div>

        <form>
          <input
            className="form-control"
            type="text"
            value={this.state.newTodo}
            placeholder="Add new todo"
            style={{ marginTop: 5 }}
            onChange={this.handleChange}
          />

          {this.showSubmitButton()}
        </form>

        <CompletedToDo
          style={{ marginTop: 15 }}
          completedTodo={this.state.completedTodo}
          addCompletedTodoBack={this.addCompletedTodoBack}
        />
      </div>
    );
  }
}

export default Todo;
