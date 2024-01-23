import { useState } from "react";
import { useParams } from "react-router-dom";
// import useFetchF1 from "./useFetchF1"

const ShowF1Details = () => {
  const datas = {
    name: "",
    nationality: "",
    pilot: "",
    img: "",
  };

  const { pos } = useParams();
  // const{data,loading,error}=useFetchF1()
  // const data1= data?.find(el=>el.pos.toString()===pos)
  const [input, setInput] = useState(datas);
  const [list, setList] = useState([]);

  function handleInput(e) {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setList((prevList) => [...prevList, input]);
    setInput(datas);
    console.log(list);
    console.log(input);
  }

  return (
    <div>
      <h3>Position {pos}</h3>


      {pos % 2 == 0 && (
        <div>
        <form onSubmit={handleSubmit}>
          {/* {loading&&<h2>Loading...</h2>}
            {error&&<h2>error!!</h2>}
            {data1&& (
                <div>
                   <h2>{data1.nationality}</h2>
                   <h2>{data1.points}</h2>
    
                </div>
            )}
     */}
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInput}
            placeholder="name"
          />
          <input
            type="text"
            name="pilot"
            value={input.pilot}
            onChange={handleInput}
            placeholder="pilot"
          />
          <input
            type="text"
            name="nationality"
            value={input.nationality}
            onChange={handleInput}
            placeholder="nationality"
          />
          <input
            type="text"
            name="img"
            value={input.img}
            onChange={handleInput}
            placeholder="image"
          />
          <button type="submit">Send</button>
        </form>
        </div>
      )}


      {pos % 2 != 0 && (
        <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInput}
            placeholder="name"
          />
          <input
            type="text"
            name="img"
            value={input.img}
            onChange={handleInput}
            placeholder="image"
          />
          <button type="submit">Send</button>
        </form>
        </div>
      )}

      <ul>
        {list.map((el, index) => (
          <li key={index}>
            <h4>{el.name}</h4>
            <p>{el.pilot}</p>
            <p>{el.nationality}</p>
            <img src={el.img} alt="image" />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ShowF1Details;
