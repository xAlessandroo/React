import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const language = useContext(LanguageContext);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2 className="clock">The time is {date.toLocaleTimeString(language)}!</h2>
    </div>
  );
}
