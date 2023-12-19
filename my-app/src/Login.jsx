import { useState } from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";

export function Login({ onLogin }) {
  
    function createData() {
    return {
      username: "",
      password: "",
      remember: false,
    };
  }

  const [data, setData] = useState(createData());

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((d) => {
      return {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleLogin(event){
    event.preventDefault()
    onLogin(data)
  }

  function handleReset(){
    setData(createData())
  }

  return (
    <form onSubmit={handleLogin}>
        <InteractiveWelcome name={data.username}/>
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={handleChange}
        placeholder="Insert username"
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Insert password"
      />
      <br />
      <label htmlFor="remember">Remember for later</label>
      <input
        type="checkbox"
        name="remember"
        checked={data.remember}
        onChange={handleChange}
      />
      <br />
      <button type="submit" disabled={!data.username || !data.password}>
        Login!
      </button>
      <button type="reset" onClick={handleReset}>Reset</button>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </form>
  );
}
