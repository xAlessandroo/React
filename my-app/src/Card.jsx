export function Card({ user }) {
  return(
  <div>
    <img src={user.avatar} />
    <h2>
      {user.first_name} {user.last_name}
    </h2>
    <p>Email: {user.email}</p>
    <h4>Address</h4>
    <p>{user.address.city}</p>
    <p>{user.address.state}</p>
  </div>
  )
}
