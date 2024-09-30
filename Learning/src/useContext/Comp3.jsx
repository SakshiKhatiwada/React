import { useContext } from "react";
import { UserContext } from "./file3";
// import ContextProvider from "./file3"

const Comp3 = () => {
    const {userName} = useContext(UserContext);
  return (
  <>
    <h1>
        This is {userName}</h1>
  </>
  )
}

export default Comp3