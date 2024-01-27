import { Card } from "./Card";
import { useFetch } from "./useFetch";

export function Fetch() {
  const { data, loading, error } = useFetch();

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>There has been an error!</h2>}
      {data && (
        <ul>
          {data.map((el, index) => (
            <Card key={index} user={el} />
          ))}
        </ul>
      )}
    </div>
  );
}
