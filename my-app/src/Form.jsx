import { useState } from "react";

export function Form() {

    let createInput = {        
        imageUrl: '',
        name: '',
        surname: '',
        age: 0
    }

    const [input, setInput] = useState(createInput)

    const [items, setItems] = useState([])

    function handleSubmit(e){
        e.preventDefault();
        console.log(input);
        const values = {
            imageUrl: input.imageUrl,
            name: input.name,
            surname: input.surname,
            age: input.age
        }
        setItems((data) => [...data, values])

        setInput(createInput)
    }

    function handleChange(e){
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]: value
    })
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type="text" name="imageUrl" placeholder="Insert image" onChange={handleChange} value={input.imageUrl}/>
        <input type="text" name="name" placeholder="Enter name" onChange={handleChange} value={input.name}/>
        <input type="text" name="surname" placeholder="Enter surname" onChange={handleChange} value={input.surname}/>
        <input type="number" name="age" onChange={handleChange} value={input.age}/>
        <button type="submit" disabled={!input.name || !input.surname}>Send!</button>
    </form>
    <ul>
        {items.map((item, index) => 
        <div key={index}>
            <li><img src={item.imageUrl} width={300} height={250}/></li>
            <li>{item.name}</li>
            <li>{item.surname}</li>
            <li>{item.age}</li>
        </div>
        )} 
    </ul>
  </div>
  );
}
