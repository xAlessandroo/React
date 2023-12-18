import { useState } from "react";

export function Button(){

    const [visibility, setVisibility] = useState(false);

    function handleVisibility(){
        setVisibility((el) => 
            !el
        );
    }
    return (
        <div>
            <button onClick={handleVisibility}>Toggle Visibility</button>
            {visibility && <p>Text</p>}
        </div>
    )
}