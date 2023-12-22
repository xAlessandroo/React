import { useState } from "react"
import classes from "./TodoList.module.scss"

export function TodoList(){

    const [todos, setTodos] = useState([])
    const [value, setValue] = useState('')

    function handleClick(event){
        event.preventDefault()
        setTodos([...todos, value])
        setValue('')
    }

    function handleInput(event){
        const inputValue = event.target.value
        setValue(inputValue)
    }

    function handleReset() {
        setTodos([])
    }

    function handleRemove(indexToRemove){
        setTodos(prevTodos => prevTodos.filter((_, index) => index !== indexToRemove))
    }

    return (
        <div>
            <form onSubmit={handleClick}>
            <input type="text" value={value} onChange={handleInput} placeholder="Write your ToDo here!"/>
            <button className={classes.button} type="submit" onClick={handleClick}>Add ToDo to the list!</button>
            <button className={classes.button} type="reset" onClick={handleReset}>Reset ToDos</button>
            </form>
            <hr />
            <h2>ToDo List!</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}
                        <button className={classes.remove}type="button" onClick={() => handleRemove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}