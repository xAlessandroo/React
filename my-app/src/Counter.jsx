import { useState } from "react"
import { CounterDisplay } from "./CounterDisplay";

export function Counter({initialValue = 0}){

    const [counter, setCounter] = useState(initialValue);

    return (
        <div>
            <CounterDisplay counter={counter}/>
            <button onClick={()=>{ setCounter(counter + 1)}}>Increment</button>
            <button onClick={()=>{ setCounter(counter - 1)}}>Decrement</button>
            <button onClick={()=>{ setCounter(initialValue)}}>Reset</button>
        </div>
    )
}