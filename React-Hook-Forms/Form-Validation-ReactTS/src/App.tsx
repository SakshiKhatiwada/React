import { SubmitHandler, useForm } from 'react-hook-form'
import './App.css'

//defining TypeScript types --> describes the expected shape of the form data
type Inputs = {
  example: string 
  exampleRequired: string
}
//example -> string representing a non-required i/p field, exampleRequired -> representing a required i/p field

function App() {

  //destructuring assignment
  const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>()
  //<Inputs> indicate TypeScript generics -> specifying a type for the data the form will handle

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log('data',data);
  // TypeScript Syntax ":" -> type annotation
  //type of onSubmit variable is SubmitHandler<Inputs>
  //NOTE - The angle brackets <Inputs> indicate that SubmitHandler is a generic type. It can take a type argument, which specifies the shape of the data that the function will handle. By passing Inputs to SubmitHandler, you are telling TypeScript that the data passed to the onSubmit function will match the structure defined in the Inputs type.

  console.log('watching: ',watch("example")); //helps to see the current value of the example input field
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* handleSubmit will first validate the inputs before calling the onSubmit function. */}
      <input defaultValue="name" {...register("example")}/>
      {/* note1 */}
      <input {...register("exampleRequired", {required: true})}/>

      {/* errors will return when field validation fails -> This line conditionally renders an error message if the exampleRequired input fails validation (i.e., if it’s not filled out). */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type='submit'/>
    </form>
  )
}

export default App

// note1: Expanded version w/o spread operator: const { onChange, onBlur, ref } = register("example");

{/* <input
  defaultValue="test"
  onChange={onChange}  // Manually assigning onChange
  onBlur={onBlur}      // Manually assigning onBlur
  ref={ref}            // Manually assigning ref
/> */}
