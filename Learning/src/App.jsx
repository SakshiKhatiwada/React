// import { useState } from 'react'
import './App.css'
import Comp3 from './useContext/Comp3'
import ContextProvider from './useContext/file3'
// import Comp1 from './useContext/w-useContext'
// import UseStateHook from './practice1/hooks/useState'
// import Component1 from './useContext/wo-useContext'
// import NormalVar from './practice1/components/normalVar'

function App() {
  // const [count, setCount] = useState(0)
  
  
  
 
  return (
    <>
    {/* <NormalVar/> */}
    {/* <UseStateHook/> */}
    {/* <Component1/> */}
    {/* <Comp1/> */}

{/* provider function here */}
    <ContextProvider>
        <Comp3/>
    </ContextProvider>
    </>
  )
}

export default App
