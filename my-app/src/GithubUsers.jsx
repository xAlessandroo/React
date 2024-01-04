import { useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUsers(){

    const [search, setSearch] = useState('')
    const [names, setNames] = useState([])

    async function handleSubmit(e){
        e.preventDefault();
    
        const response = await fetch(`https://api.github.com/users/${search}`)
        const responseJSON = await response.json();
        setNames(users => [...users, responseJSON]);
        setSearch('')
    }

    return (
        <div>
            <h3>Github Users</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter github username here!" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit">Search User</button>
            </form>
            <ul>
                {names.map((name, index) => {
                    <li key={index}> <GithubUser username={name.login}/> </li>
                })}
            </ul>
        </div>
    )
}