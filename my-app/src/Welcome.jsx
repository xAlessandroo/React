export function Welcome({ name, age }){

    return ( 
        <div>
        <h2>Welcome, {name}!</h2>
        {name === 'John' && <p>Welcome {name}</p>}
        {!!age && age > 17 && age && age < 66 && <p>You are an adult!</p>}
        {!!age && age < 18 && <p>You are very young</p>}
        </div>
    )
}

