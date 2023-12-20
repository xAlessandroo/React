import { UncontrolledLogin } from "./UncontrolledLogin";

export function App(){

    function handleLogin(data){
        console.log('Loggin data:' , data);
    }

    return (
        <div>
            <h1>My app!</h1>
            {/* <Login onLogin={handleLogin}/> */}
            <UncontrolledLogin onLogin={handleLogin}/>
        </div>
    )
}