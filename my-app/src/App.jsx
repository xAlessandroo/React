import { Routes, Route } from 'react-router-dom'
import { Navigation } from './Navigation'
import { Fetch } from './Fetch'
import { AboutUs } from './AboutUs'
import { Login } from './Login'

export function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/contact' element={<Fetch />} />
        </Route>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  )
}
