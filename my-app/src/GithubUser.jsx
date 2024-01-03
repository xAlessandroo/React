import { useEffect, useState } from "react"

export function GithubUser({ username }){

    const [data, setData] = useState()

    async function fetchGithubUser(username){

        const response = await fetch(`https://api.github.com/users/${username}`)
            const responseJSON = await response.json()

            setData(responseJSON) 
    }

    useEffect(() => {
        fetchGithubUser(username)
    }, [username])

    return (
    <div>
        {data && <p>Name: {data.name}</p>}
        {data && <p>Login: {data.login}</p>}
        {data && <img src={data.avatar_url} alt="Avatar"/>}
    </div>
    )
}