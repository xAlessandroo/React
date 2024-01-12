import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser() {
  const { username = 'xAlessandroo' } = useParams();

  return (
    <div>
      <h2>Github user</h2>
      <GithubUser username={username} />
    </div>
  );
}
