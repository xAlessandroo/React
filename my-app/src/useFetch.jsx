import { useEffect, useState } from "react"

export function useFetch(){
    const[data,setData]=useState(null)
    const [error,setError]=useState(false)
    const[loading,setLoading]=useState(false)

    const FetchPosts=async()=>{
        setLoading(true)
        setError(null)
        try {
            const response=await fetch("https://random-data-api.com/api/users/random_user?size=4")
            const responseJson=await response.json()
            setData(responseJson)
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        FetchPosts()
    },[])

    return{data,loading,error}
}