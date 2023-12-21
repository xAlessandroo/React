import { useState } from "react"

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

    return (
        <div>
            <form onSubmit={handleClick}>
            <input type="text" value={value} onChange={handleInput} placeholder="Write your ToDo here!"/>
            <button type="submit" onClick={handleClick}>Add ToDo to the list!</button>
            <button type="reset" onClick={handleReset}>Reset ToDos</button>
            </form>
            <hr />
            <h2>ToDo List!</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}