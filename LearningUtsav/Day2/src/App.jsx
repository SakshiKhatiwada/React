import './App.css'
import ImpureFunc from './components/impureFunc'
import PureFunc from './components/purefunc'


function App() {
let Array = [
  {
    id: 1,
    name: 'Famous stories in Nepal',
  },
  {
    id: 2,
    name: 'who wrote this?',
  }
]

  return (
    <main>
     <section className='left'>
      <PureFunc array={Array}/>
     
     </section> 
     <section className='right'>
      <ImpureFunc array={Array}/>
      
     </section>
    </main>
  )
}

export default App
