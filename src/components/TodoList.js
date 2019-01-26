import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <h3 className="text-capitalize text-center mt-5">Todo List</h3>
        <ul className="list-group mb-3">
          {items.map(item => {
            return item.title !== "" ? (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            ) : null;
          })}
        </ul>
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize"
          onClick={clearList}
        >
          clear list
        </button>
      </div>
    );
  }
}
