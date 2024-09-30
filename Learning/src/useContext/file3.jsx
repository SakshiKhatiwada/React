//directly providing variables while creating context

import { createContext, useState } from "react";

//Step 1: createContext
export const UserContext = createContext({
    userName: "Sakshi",
    setUserName: ()=>{},
    isAuthenticated: "false",
    setAuthenticated: ()=>{},
})
// we can directly just createContext here and create variables down there, no need to write it twice

//Step 2: create a contextProvider
const ContextProvider = ({children}) => {
    //children will be the components wrapped inside this ContextProvider

    //we have to use the same name and create state variables
    const [userName, setUserName] = useState('Sakshi');
    const [isAuthenticated, setAuthenticated] = useState('false');
    
  return (
    <div>
        {/* that created context here, not the provider function */}
            <UserContext.Provider value={{userName, setUserName, isAuthenticated, setAuthenticated}}>
            {/* one bracket is for variables, inner bracket is the bracket for object -> it's passed as object */}
                {children}
                {/* all these children will be able to access that variables values passed here */}
            </UserContext.Provider>

    </div>
  )
}

export default ContextProvider;
