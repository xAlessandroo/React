import { Route, Routes } from "react-router-dom";
import { Posts } from "./Posts";
import { Details } from './Details'

export function App(){
    return (
        <Routes>
            <Route path="/" element={<Posts />}/>
            <Route path="/item/:id" element={<Details />}/>
        </Routes>
    )
}