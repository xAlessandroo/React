import { useParams } from "react-router-dom";
import { DATA } from "./Data";

export function Details() {
  const { id } = useParams();
  const data = DATA.find((item) => item.id.toString() === id);

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.price}</p>
    </div>
  );
}
