import { Welcome } from "./Welcome"
export function App(){
    return (
        <div>
            <Welcome name="Alex" age={23}/>
            <hr />
            <Welcome name="Marta" age={0}/>
            <Welcome name="Marta" />
            <hr />
            <Welcome name="Ella" age={50}/>
            <hr />
            <Welcome name="Jenny" age={11}/>
            <hr />
            <Welcome name="John" age={33}/>
        </div>
    )
}