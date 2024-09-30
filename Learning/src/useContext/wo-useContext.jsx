import { useState } from "react"

const Component1 = () => {
    const [user, setUser] = useState("Sakshi");

  return (
    <>
        <h1>{`Hello ${user}`}</h1>
        <Component2 user={user}/>
        {/* <Component3 user={user}/> */}
        {/* <Component3/> */}
    </>
  );
}
const Component2 = ({user}) => {
// if user not received here -> error
  return (
    <>
        <h1>This is Component2</h1>
        <Component3 user={user}/>
    </>
  )
}

const Component3 = ({user}) => {

  return (
    <>
        <h1>{`Hello from component 3 ${user}`}</h1>
        {/* user's value = undefined. Why? Because it doesn't receive the value if not passed from it's parent*/}
        {/* Limitations? The variable has to pass through each parent even if it's not needed there and only needed by the child component. This is called ---Prop Drilling---. To solve this, we use useContext, which provides access to the variable to the components wrapped in the provider component */}
    </>
  )
}

export default Component1;