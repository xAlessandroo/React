import { Routes, Route, Link } from "react-router-dom";
import { Container } from "./Container";
import { Welcome } from "./Welcome";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";

export function App() {
  return (
    <Container title="My App">
      <ul>
      <li><Link to='/'>Home!</Link></li>
      <li><Link to='/users'>Users!</Link></li>
        
      </ul>
      <Routes>
        <Route path="/" exact element={<Welcome />}></Route>
        <Route path="/users" element={<GithubUserList />} >
          <Route index element={<h3>Add a user and select it!</h3>} />
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
