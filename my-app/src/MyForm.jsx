import { useState } from "react";

export function MyForm() {
  const createInput = {
    imageUrl: "",
    name: "",
    surname: "",
    age: 0,
  };

  const [input, setInput] = useState(createInput);

  const [item, setItem] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newValues = {
      imageUrl: input.imageUrl,
      name: input.name,
      surname: input.surname,
      age: input.age,
    };
    setItem((data) => [...data, newValues]);
    setInput(createInput);
    console.log(input);
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="imageUrl"
          placeholder="Image"
          value={input.imageUrl}
          onChange={handleInput}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={input.name}
          onChange={handleInput}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={input.surname}
          onChange={handleInput}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={input.age}
          onChange={handleInput}
        />
        <button type="submit" disabled={!input.name || !input.surname}>Send</button>
      </form>
      <ul>
        {item.map((items, key) => 
            <li key={key}>
                <img src={items.imageUrl}/>
                <p>{items.name}</p>
                <p>{items.surname}</p>
                <p>{items.age}</p>
            </li>
        )}
      </ul>
    </div>
  );
}
