import { Container } from "./Container";
import { Welcome } from "./Welcome";
import { GithubUser } from "./GithubUser";
import { SWRConfig } from "swr";

const fetcher = url => fetch(url).then(response=> response.json())

export function App() {

  return (
    <Container title={<h1>My app!</h1>}>
      <Welcome name="Alex" />
      <SWRConfig value={{fetcher}}>
      <GithubUser username='xAlessandroo'/>
      </SWRConfig>
    </Container>
  );
}
