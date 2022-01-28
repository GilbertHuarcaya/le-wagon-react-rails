import React, { useState, useEffect} from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const initialTodos = [
  {
    id: 1,
    title: "todo #1",
    description: "desc del todo1",
    completed: false,
  },
  {
    id: 2,
    title: "todo #2",
    description: "desc del todo2",
    completed: true,
  },
];


function App() {

  const [ todos, setTodos] = useState(initialTodos);

  const todoDelete = (todoId) => {

    const changedTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos(changedTodos);
  };

  const todoAdd = (todo) => {
    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false,
    };

    const changedTodos = [newTodo, ...todos];
    setTodos(changedTodos);
  };

  useEffect( ()=> {
   alert("bienvenido a tu primer todo en react")
  }, [])

  useEffect( ()=> {
    if ( todos !== initialTodos)
    alert("a sido modificada tu lista de tareas")
   }, [todos])

  return (
    <div>
      <TodoList 
            todos={todos}
            todoDelete={todoDelete} 
            />
      <TodoForm  
      todoAdd={todoAdd} 
      />
     </div>
  );
}

export default App;