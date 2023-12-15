export function Welcome({ name, age }){

    return ( 
        <div>
            <h2>Welcome, {name}</h2>
        {Boolean(age) && <p>You are {age} years old.</p>}
        {age === 0 && <p>You are very young!</p>}
        </div>
    )
}
