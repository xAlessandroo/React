import { useState } from "react"
import { Link } from "react-router-dom"

export function ButtonLogin({ value = true }){

    const [login, setLogin] = useState(value)

    const handleLoginOrNot=()=>{
        setLogin((login)=>!login)
        }

        return (
        <div>
            <button onClick={handleLoginOrNot}>{login ? <Link to='/el'>Login</Link> : <Link to='/'>Logout</Link>}</button>
        </div>
        )
}