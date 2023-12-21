import { Colors } from "./Colors";
import { Counter } from "./Counter";

export function App() {
  function handleLogin(data) {
    console.log("Loggin data:", data);
  }

  return (
    <div>
      <h1>My app!</h1>
      <Counter />
      <Colors
        itemArray={[
          { id: 1, name: "Jane", age: 33 },
          { id: 2, name: "Kate", age: 20 },
          { id: 3, name: "John", age: 15 },
          { id: 4, name: "Billy", age: 24 },
          { id: 5, name: "Jane", age: 50 },
        ]}
      />
    </div>
  );
}
