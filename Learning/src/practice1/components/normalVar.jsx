

const NormalVar = () => {


  let count = 0;

  const increment = () => {
    count++;
  }



  return (
    <>
      {/* React is optimized to re-render only when it knows the state has changed. React doesn't keep track of these variables, so count won't be incremented at all. Only knows the state is changed if variable is declared using useState*/}
      {console.log('count: ', count)} 
      {/* prints initial value */}
      <button onClick={increment}>
        count = {count}
        </button>
    </>
  )

}

export default NormalVar