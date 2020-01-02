import { observable } from "mobx";
import React from "react";
import ReactDOM from "react-dom";

import { observer } from "./mobx-react";

const todos = observable([
  { id: 1, title: "Learn hooks", done: false },
  { id: 2, title: "MobX is awesome", done: true }
]);

const Todo = observer(({ todo }) => {
  console.log("render todo " + todo.title, todo);
  return (
    <li>
      <input
        type="checkbox"
        value={todo.done}
        onClick={() => (todo.done = !todo.done)}
      />
      {todo.title}
    </li>
  );
});

const Todos = observer(({ todos }) => {
  console.log("Todos", { todos });
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
      <button
        onClick={() => {
          todos.push({
            id: Math.random(),
            title: "generated todo",
            done: false
          });
        }}
      >
        Add
      </button>
    </div>
  );
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <Todos todos={todos} />
  </div>,
  rootElement
);
