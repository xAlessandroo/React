export function Card({ user }){
    return <div>
        <img src={user.avatar} />
        <h2>{user.first_name} {user.last_name}</h2>
        <p>Email: {user.email}</p>
        <p>Address: {user.address.city}, {user.address.state}</p>
    </div>
}