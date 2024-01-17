import { Container } from "./Container";
import { Welcome } from "./Welcome";
import { GithubUser } from "./GithubUser";

export function App() {

  return (
    <Container title={<h1>My app!</h1>}>
      <Welcome name="Alex" />
      <GithubUser username='xAlessandroo'/>
    </Container>
  );
}
