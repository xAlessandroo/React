import { Route, Routes } from "react-router-dom"
import FetchNameF1 from "./FetchNameF1"
import ShowF1Details from "./ShowF1Details"
import { ButtonLogin } from "./ButtonLogin"

export function App() {

  return (
    <Routes>
      <Route path="/" element={<ButtonLogin />}/>
      <Route path='/el' element={<FetchNameF1/>} />
      <Route path="/el/:pos"element={<ShowF1Details/>}/>
    
    </Routes>
  )
}
