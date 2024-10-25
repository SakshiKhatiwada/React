import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchTodos } from './slice/todo'

function App() {
const dispatch = useDispatch();
const state = useSelector(state=> state);

if(state.todo.isLoading){
  return <h1>loading...</h1>
}
// console.log(state);
  return (
    <>
    <button onClick={e => dispatch(fetchTodos())}>Fetch todos</button>
    {
      state.todo.data && state.todo.data.map(e=> <li key={e.id}>{e.title}</li>)
    }
    </>
  )
}

export default App
