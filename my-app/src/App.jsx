import { Counter } from "./Counter";
import { Welcome } from "./Welcome";

export function App(){
    return (
        <div>
            <h1>My App</h1>
            <hr />
            <Welcome name="Alex" age={22}/>
            <Counter initialValue={10}/>
        </div>
    )
}