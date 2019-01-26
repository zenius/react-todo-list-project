import React, { Component } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = event => {
    this.setState({ item: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { id, item, items } = this.state;
    const newItem = { id, title: item };
    this.setState({
      items: [...items, newItem],
      id: uuid(),
      item: "",
      editItem: false
    });
  };

  clearList = () => {
    this.setState({ items: [] });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filteredItems });
  };

  handleEdit = id => {
    const { items } = this.state;
    const filteredItems = items.filter(item => item.id !== id);
    const selectedItem = items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      id: selectedItem.id,
      item: selectedItem.title,
      editItem: true
    });
  };

  render() {
    const { item, items, editItem } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={editItem}
            />
            <TodoList
              items={items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
