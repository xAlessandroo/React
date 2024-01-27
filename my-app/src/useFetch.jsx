import { useEffect, useState } from "react"

export function useFetch(){

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    async function fetchPosts(){
        setLoading(true)
        try {
            const response = await fetch ("https://random-data-api.com/api/users/random_user?size=4")
            const responseJSON = await response.json()
            setData(responseJSON)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    },[])

    return {data, loading, error}
}