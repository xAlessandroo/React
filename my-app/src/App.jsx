import { Routes, Route, Link } from "react-router-dom";
import { Container } from "./Container";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";
import { Counter } from "./Counter";
import { GithubUserList } from "./GithubUserList";

export function App() {
  return (
    <Container title="My App">
      <Routes>
        <Route path="/" exact element={<Welcome />}></Route>
        <Route path="/users" element={<GithubUserList />} >
          <Route path=":username" element={<ShowGithubUser />}/>
        </Route>
          <Route
            path="*"
            element={
              <div>
                <p>Page not found!</p>
                <Link to="/">Home</Link>
              </div>
            }
          />

      </Routes>
    </Container>
  );
}
