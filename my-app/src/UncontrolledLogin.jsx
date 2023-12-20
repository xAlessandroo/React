export function UncontrolledLogin({ onLogin }) {
  function handleLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target)
    const username = formData.get('username')
    const password = formData.get('password')
    const remember = formData.get('remember')

    onLogin({
      username,
      password,
      remember,
    });
  }

  function handleReset(event) {
    event.target.reset();
  }

  return (
    <form onSubmit={handleLogin} onReset={handleReset}>
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <label htmlFor="remember">Remember for later</label>
      <input type="checkbox" name="remember" />

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}
// Vantaggi
// Con formData abbiamo più flessibilità con gli input/elementi

// Svantaggi
// Non tutti i browser supportano formData e quindi è più limitato, inoltre alcuni browser potrebbero trattare gli elementi ed i valori in modo diverso. 
// Infine non si ha il controllo manuale dei dati, potrebbero accadare quindi azioni indesiderate 
