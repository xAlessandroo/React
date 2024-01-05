import { useState } from "react";
import { Clock } from "./Clock";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { GithubUser } from "./GithubUser";

export function App() {
  function handleLogin(data) {
    console.log("Loggin data:", data);
  }

  const [language, setLanguage] = useState('en')

  function handleSelect(event){
    setLanguage(event.target.value)
  }

  return (
    <Container title={<h1>My app!</h1>}>
      <Welcome name="Alex" />
       <LanguageContext.Provider value={language}>
        <label htmlFor="languages">Select language</label>
      <select name="languages"value={language} onChange={handleSelect}>
        <option value="EN">English</option>
        <option value="IT">Italian</option>
      </select>
        <Clock />
      </LanguageContext.Provider>
      <GithubUser username="gianmarcotoso"/>
    </Container>
  );
}
