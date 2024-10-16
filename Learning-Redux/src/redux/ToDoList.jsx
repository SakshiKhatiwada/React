import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './TodoItem';
import { useEffect } from 'react';
import { getTodosAsync } from './todoSlice';

const ToDoList = () => {
    const todos = useSelector((state)=> state.todoItems);
    //NOTE when the state in the store updates, the useSelector hook gets notified and updaes the todos variable iwth the new todos taken from state
    const dispatch = useDispatch();
    // console.log('todos: ',todos);
    //name: todoItems

    //NOTE we have to trigger the action that fetches the todo. -> doing that when this is first loaded:

    useEffect(()=>{
      dispatch(getTodosAsync());
    },[dispatch]);


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