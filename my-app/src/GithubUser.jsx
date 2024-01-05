import { useGithubUser } from "./useGithubUser"


export function GithubUser({ username }){

    const { data } = useGithubUser(username)

    return (
    <div>
        {data && <p>Name: {data.name}</p>}
        {data && <p>Login: {data.login}</p>}
        {data && <img src={data.avatar_url} alt="Avatar"/>}
    </div>
    )
}