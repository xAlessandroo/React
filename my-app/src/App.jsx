import { Routes,Route } from "react-router-dom"
import { Navigation } from "./Navigation"
import { Fetch } from './Fetch'
import { Contact } from "./Contact"
import { Login } from "./Login"

export function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
        <Route path="/about-us" element={<Fetch />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login s/>}/>
        </Route>
      </Routes>
    </div>
  )
}
