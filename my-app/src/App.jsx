import { UncontrolledLogin } from "./UncontrolledLogin";
import { Login } from "./Login"
import { FocusableInput } from "./FocusableInput";

export function App(){

    function handleLogin(data){
        console.log('Loggin data:' , data);
    }

    return (
        <div>
            <h1>My app!</h1>
            <Login onLogin={handleLogin}/>
            {/* <UncontrolledLogin onLogin={handleLogin}/> */}
            <FocusableInput />
        </div>
    )
}