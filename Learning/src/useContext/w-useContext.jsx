import { createContext, useContext, useState } from "react"
// import Component1 from './wo-useContext';

const userContext = createContext();



const Comp1 = () => {
  const [user,setUser] = useState('sakshi');

  const handleClick = ()=>{
    setUser('saaaaaaaakshi');
  }
  return (
    <>
    {/* any component wrapped inside this provider function can use this provided value*/}
    <userContext.Provider value={user}>
    <h1>Hi, this is Component1, user1 {user}</h1>
      <Comp2/>
      <button onClick={handleClick}>Click me</button>
    </userContext.Provider>
    </>
  )
}

const Comp2 = () => {
  const user2 = useContext(userContext);
  // the value provided my provider function will be taken here
  return (
    <>
    <h1>This is component2</h1>
   <h2>{user2} is on a mission baby</h2>
    </>
  )
}

export default Comp1