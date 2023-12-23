import { useState } from "react";

export function Container({ title, children }) {

    const [toggle, setToggle] = useState(false)

    function handleToggle() {
        setToggle((t) => !t)
    }

  return (
    <div className="container">
      <div>
        {title}
        <button onClick={handleToggle}>Toggle</button>
      </div>
      {!toggle && <div>{children}</div>}
    </div>
  );
}
