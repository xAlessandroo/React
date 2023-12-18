import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";

export function App(){
    return (
        <div>
            <Welcome name="Alex" age={22}/>
            <MouseClicker />
        </div>
    )
}