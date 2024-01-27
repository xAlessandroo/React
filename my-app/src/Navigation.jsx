import {Link, Outlet, useNavigate} from 'react-router-dom'

export function Navigation(){

    const navigate = useNavigate()

    function handleClick(){
        navigate('/login')
    }

    return <div>
        <ul>
        <li><Link to='/'>Home!</Link></li>
        <li><Link to='/about-us'>About Us!</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <button type="button" onClick={handleClick}>Go to login</button>
        </ul>
        <Outlet />
    </div>
}