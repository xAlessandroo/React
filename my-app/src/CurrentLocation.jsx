import { useCurrentLocation } from "./useCurrentLocation"

export function CurrentLocation(){

   const { location, error, loading, getCurrentLocation } = useCurrentLocation();

   return(
      <div>
      {loading && <p>Cercando...</p>}
      {error && <p>{error}</p>}
      {location && (
        <p>
          La tua posizione attuale è: {location.latitude}, {location.longitude}
        </p>
      )}
      <button onClick={getCurrentLocation}>Ottieni posizione</button>
    </div>
   )
}
