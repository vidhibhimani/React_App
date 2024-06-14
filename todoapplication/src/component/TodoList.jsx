import React from 'react';
import './Todolist.css';   

function TodoList({ data, hdlt, hupd }) {
  return (
    <div className="todo-container">
        <h1>{data.work} - <span>{data.isCompleted ? "Completed" : "Not Completed"}</span></h1>
        <button className="todo-button" onClick={() => hupd(data.id)}>Edit</button>
        <button className="todo-button delete" onClick={() => hdlt(data.id)}>Delete</button>
    </div>
  );
}

export default TodoList;
