import { useState } from "react";

export function PostForm() {
  const [data, setData] = useState({
    title: "",
    body: "",
    userId: 1,
  });

  function handleChange(event) {
    const { name, type, checked, value } = event.target;
    setData({
      ...data,
      [name]: type === "checked" ? checked : value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(data);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const responseJSON = await response.json();

    console.log(responseJSON);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={data.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="body"
        value={data.body}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
