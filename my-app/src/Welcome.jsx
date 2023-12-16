export function Welcome({ name, age }){

    return ( 
        <div>
        {name ? <h2>Welcome, {name}!</h2> : "ciao"}
        {Boolean(age) && <p>You are {age} years old.</p>}
        {age === 0 && <p>You are very young!</p>}
        </div>
    )
}
