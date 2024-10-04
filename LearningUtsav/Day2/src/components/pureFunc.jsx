
const Func = ({count}) => {
return <li>call no. {count}</li>;
}


const PureFunc = ({array}) => {
    let count = 0;

  return (
    <div className="pure">
        <h1>Made using Pure Function</h1>
        <ul>

        {
        array.map((item) => {
          return  <li key={item.id}> {item. name}</li>
        //   put return because you used curly braces!!!
        })
    }
    <li key={'create'}>nth can go wrong here</li>
    <Func count={++count}/>
    <Func count={++count}/>
    <Func count={++count}/>
    <Func count={++count}/>
    <Func count={++count}/>
    <Func count={++count}/>
    </ul>
    </div>
  )
}

export default PureFunc