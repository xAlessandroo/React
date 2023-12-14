import { Hello } from "./HelloWorld";
// import { Message } from "./Message";

// Can you use the Hello component more than once in the App component? What happens if you do?
// Si. In questo modo verrà chiamata la funzione più di una volta e verrà renderizzato normalmente 

// Can you render the Message component directly within the App component? What happens if you do?
// Possiamo creare la funzione direttamente nell'App component e chiamarla senza utilizzare alcun import. Questo lo farà renderizzare normalmente.

export function App(){
    return (
    <div>
        <Hello />
        <Message />
        <Hello />
    </div>
    )
}

function Message(){
    return <p>What a beautiful day!</p>
}

