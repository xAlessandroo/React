import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome(){

    const [username, setUsername] = useState('');

    function handleUsername(event){
        const name = event.target.value
        setUsername(name)
    }

    return (
        <div>
            <Welcome name={username}/>
            <input type="text" onChange={handleUsername}/>
        </div>
    )
}