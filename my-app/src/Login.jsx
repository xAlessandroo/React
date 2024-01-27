import { useState } from "react"

export function Login(){

    const createData = {
        username: '',
        password: ''
    }

    const [data, setData] = useState(createData)
    const [error, setError] =useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log(data);
        setData(createData)
        if(data.username.length < 5){
            setError("Lo username deve essere di almeno 5 lettere!")
        }
    }

    function handleInput(e){
        const {name, value} = e.target
        setData((prevData) => ({
            ...prevData,
            [name] : value
        }))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" onChange={handleInput} value={data.username} placeholder="username"/>
                <input type="password" name="password" onChange={handleInput} value={data.password} placeholder="password"/>
                <button type="submit" disabled={!data.username || !data.password}>SEND!</button>
                {error && <h3>{error}</h3>}
            </form>
        </div>
    )
}