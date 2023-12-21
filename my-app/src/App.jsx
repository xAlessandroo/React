import { Counter } from "./Counter";


export function App(){

    function handleLogin(data){
        console.log('Loggin data:' , data);
    }

    return (
        <div>
            <h1>My app!</h1>
            <Counter />
        </div>
    )
}