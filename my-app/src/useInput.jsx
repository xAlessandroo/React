import { useState } from "react";

export function useInput(){
    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    function handleInput(e){
        const {name, value} = e.target;
        setInput({...input,
        [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input);
    }

    return {
        onInputForm: handleInput,
        onSubmitForm: handleSubmit
    }
}