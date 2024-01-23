export function Button({ input }){
    
    function handleClick(){
        console.log(input);
    }


    return <button type={!input.username || !input.password ? 'reset' : 'submit' } onClick={handleClick}>Enter</button>
}