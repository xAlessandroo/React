import { Link } from "react-router-dom"
import useFetchF1 from "./useFetchF1"
import { ButtonLogin } from "./ButtonLogin"

const FetchNameF1=()=>{
const{data,loading,error}=useFetchF1()

 return(
    <div>
         {loading&&<h2>Loading</h2>}
         {error&& <h2>There has been an error!</h2>}
         {data && (
            <ul>
                {data.map((el,index)=>(
                    <div key={index}>
                        <li>{el.name}</li>
                        <Link to={`/el/${el.pos}`}>Details Pilot</Link>
                    </div>
                ))}
            </ul>
         )}
        <ButtonLogin value={false}/>
    </div>

 )
}
export default FetchNameF1