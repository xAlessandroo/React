import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome({ name = user }){

    return (
        <div>
            <Welcome name={name}/>
        </div>
    )
}