import './App.css'
import AddToDoForm from './redux/AddToDoForm';
import ToDoList from './redux/ToDoList';

function App() {

  return (
    <>
      <h1>Add</h1>
      <AddToDoForm/>
      <hr/>
      <h1>List</h1>
      <ToDoList/>
    </>
  )
}

export default App
