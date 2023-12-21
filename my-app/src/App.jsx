import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { TodoList } from "./TodoList";

export function App() {
  function handleLogin(data) {
    console.log("Loggin data:", data);
  }

  return (
    <div>
      <h1>My app!</h1>
      <Counter />
      <TodoList />
    </div>
  );
}
