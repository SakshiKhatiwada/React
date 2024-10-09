//using useContext

import { createContext, useContext, useState } from "react"

const ContextProvider = createContext();

const Comp1 = () => {
    const [user, setUser] =useState('sakshi');
  return (
    <div>
        <Comp2/>

        
        <ContextProvider.Provider value={user}>
            <h1>hello {user} from comp1</h1>
                <Comp2/>

        </ContextProvider.Provider>
    </div>
  )
}

const Comp2 = ()=>{
    return <div>
        <h1>hello comp2</h1>
        <Comp3/> 
        {/* gave undefined because first comp2 is not wrapped inside context provider */}
        </div>
}

const Comp3 = ()=>{
    const user = useContext(ContextProvider);
    return <h1>{`Hi ${user} this is component 3`}</h1>

}

export default Comp1