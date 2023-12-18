import { useState } from "react";

export function CheckRadioForm() {
  const [check, setCheck] = useState({
    Option1: false,
    Option2: false,
    radioOption: "",
  });

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setCheck({
        ...check,
        [name]: type === 'checkbox' ? checked : value
    });

  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(check);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Option1">Option1</label>
      <input
        type="checkbox"
        name="Option1"
        checked={check.Option1}
        onChange={handleChange}
      />

      <label htmlFor="Option2">Option2</label>
      <input
        type="checkbox"
        name="Option2"
        checked={check.Option2}
        onChange={handleChange}
      />

      <label htmlFor="radioOption">OptionA</label>
      <input
        type="radio"
        name="radioOption"
        value="OptionA"
        checked={check.radioOption === "OptionA"}
        onChange={handleChange}
      />

      <label htmlFor="radioOption">OptionB</label>
      <input
        type="radio"
        name="radioOption"
        value="OptionB"
        checked={check.radioOption === "OptionB"}
        onChange={handleChange}
      />

      <button type='submit'>Submit!</button>
    </form>
  );
}
