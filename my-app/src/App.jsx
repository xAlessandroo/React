import { Clock } from './Clock';
import { TodoList } from './TodoList';
import { Welcome } from './Welcome'

export function App() {
  function handleLogin(data) {
    console.log("Loggin data:", data);
  }

  return (
    <div>
      <h1>My app!</h1>
      <Welcome />
      <Clock />
      <TodoList />
    </div>
  );
}
