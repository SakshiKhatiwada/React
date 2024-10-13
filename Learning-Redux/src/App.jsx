import './App.css'
import AddToDoForm from './redux/AddToDoForm';
import ToDoList from './redux/ToDoList';
import TotalCompleteItems from './redux/TotalCompleteItems';

function App() {

  return (
    <main className='main'>
     <section>
     <h1>Add ToDos</h1>
     <AddToDoForm/>
     </section>
      <section>
      <h1>Lists</h1>
      <ToDoList/>
      </section>
      <hr/>
      <section>
        <TotalCompleteItems/>
      </section>
    </main>
  )
}

export default App
