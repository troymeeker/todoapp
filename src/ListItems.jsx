import { ListItem } from "./ListItem";
export function ListItems({todos, toggleTodo, deleteTodo}){
    ListItems.propTypes = todos;

    return(
        <>
        <ul className="list">
        {todos.length === 0 && "No Tasks Yet"}
        {todos.map((todo) => {
          return (
            <ListItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          );
        })}
      </ul>
      </>
    )
}