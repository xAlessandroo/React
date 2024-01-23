import { Button } from "./Button"
import { useForm } from "./useForm"
import classes from './form.modules.scss'

export function Form(){

    const {onChange, onSubmit, input} = useForm()

    return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" name="username" placeholder="username" onChange={onChange} className={input.username.length < 3 ? classes.error : classes.check}/>
            <input type="password" name="password" placeholder="password" onChange={onChange} className={input.password.length < 7 ? 'error': 'check'}/>
            <Button input={input}/>
        </form>
    </div>
    )
}