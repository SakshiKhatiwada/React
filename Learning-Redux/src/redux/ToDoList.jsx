import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const ToDoList = () => {
    const todos = useSelector((state)=> state.todoItems);
    // console.log('todos: ',todos);
    //name: todoItems
  return (
    <>
    <ul>
        {todos.map((todo) =>(
          <li key={todo.id}><TodoItem
          id={todo.id} title={todo.title} completed={todo.completed}/></li>
        ))}
      
    </ul>
        </>
  )
}

export default ToDoList;