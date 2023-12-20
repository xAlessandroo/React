export function UncontrolledLogin({ onLogin}){

    function handleLogin(event){
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;
        const remember = event.target.remember.checked;

        onLogin({
            username,
            password,
            remember,
        });
    }

    function handleReset(event){
        event.target.reset();
    }

    return (
        <form onSubmit={handleLogin} onReset={handleReset}>
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <label htmlFor="remember">Remember for later</label>
            <input type="checkbox" name="remember" />

            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>
    )
}