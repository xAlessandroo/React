import { Card } from "./Card";
import { useFetch } from "./useFetch";

export function Fetch() {
  const { data, loading, error } = useFetch();

  return (
    <div>
      {loading && <h3>Loading...</h3>}
      {error && <h3>There has been an error!</h3>}
      {data && (
        <ul>
          {data.map((user, index) => (
            <Card key={index} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
}
