import { useState } from "react";



const Component2 = ({user}) =>{
    return (
        <div>
                <Component3 user={user}/>
        </div>
    )
}
const Component3 = ({user}) =>{
    return (
        <h1>
                Hello {user}
        </h1>
    )
}

const Component1 = () => {
    const [user, setUser] = useState('sakshi');
  return (
    <div>
        <Component2 user={user}/>
    </div>
  )
}

export default Component1