import { useState } from "react";

export function useForm(){

    const createForm = {
        username: '',
        password: ''
    }

    const [input, setInput] = useState(createForm)

    function onChange(e){
        const {name, value} = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value
    }))}

    function onSubmit(e){
        e.preventDefault()
        console.log(input);
    }

    function onReset(){
        setInput(createForm)
    }

    return {
        onChange,
        onSubmit,
        input,
        onReset
    }
}