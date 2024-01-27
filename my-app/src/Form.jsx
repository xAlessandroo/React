import { useState } from "react";
import InputField from "./InputField";

export function Form(){
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [usernameError, setUsernameError] = useState('');
        const [passwordError, setPasswordError] = useState('');
      
        const handleUsernameChange = (e) => {
          const value = e.target.value;
          setUsername(value);
          // Esempio di validazione dell'username (puoi personalizzare secondo le tue esigenze)
          setUsernameError(value.length < 5 ? 'Username troppo corto' : '');
        };
      
        const handlePasswordChange = (e) => {
          const value = e.target.value;
          setPassword(value);
          // Esempio di validazione della password (puoi personalizzare secondo le tue esigenze)
          setPasswordError(value.length < 8 ? 'Password troppo corta' : '');
        };
      
        const handleLogin = () => {
          // Implementa la logica di login qui
          console.log('Effettua il login con:', { username, password });
        };
      
        const handleReset = () => {
          setUsername('');
          setPassword('');
          setUsernameError('');
          setPasswordError('');
        };
      
        return (
          <div>
            <h2>Login Form</h2>
            <form>
              <InputField
                label="Username"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                disabled={false}
                error={usernameError}
              />
              <InputField
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                disabled={false}
                error={passwordError}
              />
              <button type="button" onClick={handleLogin} disabled={usernameError || passwordError}>
                Login
              </button>
              <button type="button" onClick={handleReset}>
                Reset
              </button>
            </form>
          </div>
        );
      }