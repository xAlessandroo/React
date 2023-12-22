import { useEffect, useState } from "react"

export function Clock(){

    const [date, setDate] = useState(new Date());
    
    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return (() => clearInterval(id));
    }, [])

    return (
    <div>
        <h2 className="clock">The time is {date.toLocaleTimeString()}!</h2>
    </div>
    )
}