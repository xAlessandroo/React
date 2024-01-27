import { useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
  const datas = {
    username: "",
    password: "",
  };

  const [data, setData] = useState(datas);
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    if (data.username.length < 5){
        setError('Lo username deve essere piu lungo di 5 lettere')
    } else {
    console.log(data);
    setData(datas);
  }
}

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  return (
    <div>
      <Link to="/">Return to Home</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={data.username}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={data.password}
        />
        <button type="submit" disabled={!data.username || !data.password}>Send!</button>
      </form>
      {error && <h3>{error}</h3>}
    </div>
  );
}
