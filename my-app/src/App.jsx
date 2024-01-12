import { Counter } from "./Counter";
import { Welcome } from "./Welcome";
import {Routes, Route} from 'react-router-dom'

export function App(){
    return (
        <div>
            <h1>My App</h1>
            <hr />
            <Routes>
                <Route path="/" element={<Welcome name="Alex" age={22}/>}/>
                <Route path=":counter" element={<Counter />} />
            </Routes>
        </div>
    )
}