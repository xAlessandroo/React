import { useState } from "react";

export function MyBernardForm() {

    function createData(){
        return {
            Option1: false,
            Option2: false,
            radioOption: '',
        }
    }

    const [check, setCheck] = useState(createData())

    function handleChange(event){
        const {name, type, checked, value} = event.target

        setCheck({
            ...check,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(check);
    }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Option1">Option1</label>
      <input type="checkbox" name="Option1" onChange={handleChange} value={check.Option1}/>

      <label htmlFor="Option2">Option2</label>
      <input type="checkbox" name="Option2" onChange={handleChange} value={check.Option2}/>

      <label htmlFor="OptionA">OptionA</label>
      <input
        type="radio"
        name="radioOption"
        value="OptionA"
        onChange={handleChange}
        checked={check.radioOption === 'OptionA'}
      />

      <label htmlFor="OptionB">OptionB</label>
      <input
        type="radio"
        name="radioOption"
        value="OptionB"
        onChange={handleChange}
        checked={check.radioOption === 'OptionB'}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
