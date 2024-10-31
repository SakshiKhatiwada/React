import './App.css'
import { useFormInput } from './hooks/useFormInput'

function App() {

    let firstName = useFormInput('Sakshi');
    let lastName = useFormInput('Khatiwada');
    let age = useFormInput(null);
    // console.log('firstname: ', firstName); -> obj

  return (
    <main>
    <h1>hi</h1>
       <label htmlFor="firstName">
        First name:
        <input id='firstName' value={firstName.value} onChange={firstName.onChange} />
      </label>
      <label htmlFor='lastName'>
        Last name:
        <input id='lastName' value={lastName.value}  onChange={lastName.onChange}/>
      </label>
      <label htmlFor='age'>
        Age:
        <input id='age' value={age.value}  onChange={age.onChange} type='number' min={0}/>
      </label>
      <p>Hi, I am {firstName.value} {lastName.value}, age: {age.value}</p>
    </main>
  )
}

export default App
