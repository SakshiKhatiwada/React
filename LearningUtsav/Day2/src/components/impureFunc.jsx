let count = 0;

const Func = ()=> {
    count++;
return <li>call no. {count}</li>
}


function ImpureFunc( {array}) {
    array.push({
        id: 'added',
        name: 'sth might go wrong here!',
    })
    // this is called twice due to Strict Mode for identifying purpose, so it's rendered twice
  return (
    <div className="impure">
        <h1>Made using Impure Function</h1>
        <ul>

        {array.map((item) => {
            return <li key={item.id}> {item. name}</li>;
        })
    }
    <Func/>
    <Func/>
    <Func/>
    <Func/>
    <Func/>
    <Func/>
    <Func/>
    </ul>
    </div>
  ) 
}

export default ImpureFunc