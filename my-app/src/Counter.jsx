import { useState } from "react"

export function Counter(){

    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h2>The counter is {counter}</h2>
            <button onClick={()=>{ setCounter(counter + 1)}}>Increment</button>
            <button onClick={()=>{ setCounter(counter - 1)}}>Decrement</button>
            <button onClick={()=>{ setCounter(0)}}>Reset</button>
        </div>
    )
}