export function ListItem({completed, id, title, toggleTodo, deleteTodo}){
    ListItem.propTypes = completed, id, title, toggleTodo, deleteTodo;
    return(
        <li
        //  key={todo.id}
         >
              <label>
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                {title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(id)}
              >
                X
              </button>
            </li>
    )
}