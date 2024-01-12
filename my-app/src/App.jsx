import { Routes, Route, Link} from 'react-router-dom'
import { Container } from "./Container";
import { Welcome } from './Welcome'
import { ShowGithubUser } from './ShowGithubUser';
import { Counter } from './Counter'

export function App() {

  return (
    <Container title='My App'>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='counter' element={<Counter />} />
        <Route path='/:username' element={<ShowGithubUser />}></Route>
      </Routes>
      <Link to='/'>Home</Link> | <Link to='counter'>Counter</Link> | <Link to='xAlessandroo'>Github User xAlessandroo</Link>
    </Container>
  );
}
