import { useState } from "react"

const Pokedex = () => {

   const [pokemonName, setPokemonName] = useState('')
   const [pokemonDatas, setPokemonDatas] = useState(null)
   const [error, setError] = useState(null)
   const [loading, setLoading] =useState(false)
   const [pokemonInfos, setPokemonInfos] = useState(null)

const handleSubmit = async (e) => {
   e.preventDefault();
   setError(null)
   setLoading(true)
   try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      const responseJson = await response.json()
      console.log(responseJson);
      setPokemonDatas({
         id: responseJson.id,
         name: responseJson.name,
         image: responseJson.sprites.front_default,
         experience: responseJson.base_experience,
         ability: responseJson.abilities[0].ability.name
      })
   } catch (error) {
      setError('No pokemon found!')
   } finally {
      setLoading(false)
   }
}

const handleInput = (e) => {
   setPokemonName(e.target.value)
}

const handleInfo = async () =>{
   setError(null)
   try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonDatas.id}`)
      const json = await response.json()
      console.log(json);
      setPokemonInfos({
         egggroup: json.egg_groups[0].name,
         color: json.color.name,
         form: json.shape.name
      })
   } catch (error) {
      setError('No more info found!')
   }
}

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput} value={pokemonName}/>
            <button type="submit">Send</button>
         </form>
      {error && <h2>{error}</h2>}
      {loading && <h2>Loading...</h2>}
      {pokemonDatas && (
               <div>
                  <h2>{pokemonDatas.name}</h2>
                  <img src={pokemonDatas.image} />
                  <p>{pokemonDatas.experience}</p>
                  <p>{pokemonDatas.ability}</p>
                  <button onClick={handleInfo}>More info</button>
                  <div>
                  {pokemonInfos && (
                     <div>
                        <p>{pokemonInfos.egggroup}</p>
                        <p>{pokemonInfos.color}</p>
                        <p>{pokemonInfos.form}</p>
                     </div>
                  )}
                  </div>
               </div>
      )}
      </div>
   )
}

export default Pokedex;
