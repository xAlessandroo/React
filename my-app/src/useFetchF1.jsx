import { useEffect, useState } from "react"

const useFetchF1=()=>{
    const[data,setData]=useState(null)
    const [error,setError]=useState(false)
    const[loading,setLoading]=useState(false)

    const FetchF1=async()=>{
        setLoading(true)
        setError(null)
        try {
            const response=await fetch("https://racingmike.com/api/v1.0/f1-constructorresults?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9&year=2023")
            const responseJson=await response.json()
            setData(responseJson)
        } catch (error) {
            setError(error)
        }finally{
            setLoading(null)
        }
    }
    useEffect(()=>{
        FetchF1()
    },[])

    return{data,loading,error}


}
export default useFetchF1