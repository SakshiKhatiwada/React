import { useForm } from 'react-hook-form'
import './App.css'

//defining TypeScript types --> describes the expected shape of the form data
type Inputs = {
  example: string 
  exampleRequired: string
}
//example -> string representing a non-required i/p field, exampleRequired -> representing a required i/p field

function App() {

  //destructuring assignment
  const {register, handleSubmit, watch, formState: {errors}} = useForm()

  return (
    <main>
      
    </main>
  )
}

export default App
