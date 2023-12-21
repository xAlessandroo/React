import { useEffect, useRef, useState } from "react";

export function Counter({ initialValue = 0}) {

    const [ counter, setCounter ] = useState(initialValue);
    const ref = useRef(initialValue)

    useEffect(() => {
        const direction = counter > ref.current ? 'up' : 'down'
        ref.current = counter

        console.log(`Counter changed ${direction} from ${ref.current}`);
    }, [counter])

    function handleCounterIncrement(){
        setCounter(counter + 1)
    }

    function handleCounterDecrement() {
        setCounter(counter - 1)
    }

    function handleCounterReset() {
        setCounter(initialValue)
    }

  return (
    <div>
        <p>I have counted to {counter}</p>
        <button onClick={handleCounterIncrement}>Increment</button>
        <button onClick={handleCounterDecrement}>Decrement</button>
        <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
