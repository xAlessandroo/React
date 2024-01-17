import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, loading, error, onFetchUser } = useGithubUser(username);

  function handleGetUserData() {
    onFetchUser(username);
  }

  return (
    <div>
      <button onClick={handleGetUserData}>Load user data!</button>
      {error && <h1>There has been an error!</h1>}
      {loading && <h1>Loading...</h1>}
      {data && <h1>{data.name}</h1>}
      {data && <img src={data.avatar_url} width={300} height={300} />}
    </div>
  );
}