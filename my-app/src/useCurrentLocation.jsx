import { useEffect, useState } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function getCurrentLocation(){
    setLoading(true);
    setError(null)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return { location, error, loading, getCurrentLocation };
}
