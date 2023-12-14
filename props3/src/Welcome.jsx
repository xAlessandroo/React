import { Age } from "./Age";

export function Welcome({ name = "Marta", age}){
    return (
        <div>
            <p>Welcome, <strong>{name}!</strong></p>
            <Age age={age}/>
        </div>
    )
}