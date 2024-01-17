import { DATA } from "./Data"
import { Link } from 'react-router-dom'

export function Posts(){

    const data = DATA;

    return (
        <ul>
            {data.map((item, index) => (
                <div key={index}>
                    <li><img src={item.image} width={300}/></li>
                    <Link to={`/item/${item.id}`}>Details</Link>
                </div>
            ))}
        </ul>
    )
}