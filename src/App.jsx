import NewTaskForm from "../NewTaskForm";
import { ListItems } from "./ListItems";
import "./styles.css";
import { useState, useEffect } from "react";


export default function App() {

  const [todos, setTodos] = useState(() => {
    const localVal = localStorage.getItem("ITEMS")
    if(localVal == null) return []

    return JSON.parse(localVal)
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  function addTodo(title) {
       setTodos(currentTodos => {
          return [
            ...currentTodos,
            { id: crypto.randomUUID(), title, completed: false },
          ]
        })
  }
 
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <NewTaskForm addTodo={addTodo} />
      <h1>To-Do List</h1>
     <ListItems todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}
