import { Button } from "./Button";

const AlertClock = () => {
    const date = new Date().toLocaleTimeString();
    // return (<button onClick={() => (alert(date))}>Click me!</button>)
    return <Button onClick={() => alert(date)} label={"Click Me"} />
}

export default AlertClock;