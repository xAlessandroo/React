export function Welcome({ name }){

    return ( 
        <div>
        {name ? <h2>Welcome, {name}!</h2> : "ciao"}
        </div>
    )
}
