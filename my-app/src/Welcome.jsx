import { Age } from "./Age";

export function Welcome({ name, age }){

    return ( 
        <div>
        {name === 'John' ? <h2>Welcomeback! {name}!</h2> : <h2>Welcome {name}</h2>}
        {!!age && age > 17 && age && age < 66 && <p><Age age={age}/> You are an adult!</p>}
        {!!age && age < 18 && <p>You are too young ({age})</p>}
        </div>
    )
}

