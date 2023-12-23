import { Clock } from './Clock';
import { Container } from './Container';
import { TodoList } from './TodoList';
import { Welcome } from './Welcome'

export function App() {
  function handleLogin(data) {
    console.log("Loggin data:", data);
  }

  return (
    <Container title={<h1>My app!</h1>}>
      <Welcome name='Alex'/>
      <Clock />
      <TodoList />
    </Container>
  );
}
