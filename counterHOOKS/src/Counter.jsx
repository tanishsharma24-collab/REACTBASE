import { useState } from 'react'

function Counter()
{
    // let counter = 0;
    let [counter , setCounter]  = useState(0);
    let  dec = ()=>
    {
    // counter = counter - 1;
    setCounter(counter - 1);
    }
    let  inc = () =>
    {
    // counter = counter + 1
    setCounter(counter + 1);
    }
    return(
        <>
        <h1>{counter}</h1>
        <button onClick={inc}>increase</button>
        <button onClick={dec}>decrease</button>
        </>
    )
}
export default Counter