import { useEffect, useRef } from "react"

export function FocusableInput(){

    const mountedRef = useRef(false)
    const inputRef = useRef(null)

    useEffect(() => {
        if(!mountedRef.current){
            mountedRef.current = true
            console.log('Mounting for the first time');
        } else {
            console.log('Mounting for debug');
        }

        inputRef.current.focus()
    })

    return <input ref={inputRef} type="text" name="focus" />
}