export function MouseClicker(){

    function handleClick(e){
        console.log(e.target.name);
    }

    return (
        <button name="one" onClick={handleClick}>Click me!</button>
    )
}