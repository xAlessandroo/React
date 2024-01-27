
import { Link, Outlet } from 'react-router-dom'

export function Navigation(){

    return(
        <div>
            <h1>Nav</h1>
            <Link to='/'>Home</Link> | <Link to='/about-us'>About Us</Link> | <Link to='/contact'>Contact</Link>
            <Outlet />
        </div>
    )
}