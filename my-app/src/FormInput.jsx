import { useInput } from "./useInput"

export function FormInput(){

    const {onInputForm, onSubmitForm} = useInput()

    return (
        <form onSubmit={onSubmitForm}>
            <input type="text" name="username" value={onInputForm.username} onChange={onInputForm}/>
            <input type="password" name="password" value={onInputForm.password} onChange={onInputForm}/>
            <button type="submit">Send!</button>
        </form>
    )
}