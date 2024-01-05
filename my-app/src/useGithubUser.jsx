import { useEffect, useState } from "react"

export function useGithubUser(username){
    const [data, setData] = useState()

    async function fetchGithubUser(username){

        const response = await fetch(`https://api.github.com/users/${username}`)
            const responseJSON = await response.json()

            setData(responseJSON) 
    }

    useEffect(() => {
        fetchGithubUser(username)
    }, [username])

    return {
        data
    }
}