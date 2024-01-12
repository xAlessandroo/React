import { Routes, Route } from 'react-router-dom'
import { Container } from "./Container";
import { Welcome } from './Welcome'
import { ShowGithubUser } from './ShowGithubUser';

export function App() {

  return (
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/:username' element={<ShowGithubUser />}></Route>
      </Routes>
  );
}
