import { useState } from 'react'

const UseStateHook = () => {

    const [count,setCount] = useState(0);
    
    {console.log(count);}
  return (
        <button onClick={()=>setCount(count+1)}>count = {count}</button>
    )
}

export default UseStateHook