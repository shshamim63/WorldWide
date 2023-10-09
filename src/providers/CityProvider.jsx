import axios from "axios";

import { createContext, useState, useEffect } from "react";

const BASE_URL = "http://localhost:8000";

const CityContext = createContext();

const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCities() {
      try {
        const res = await axios.get(`${BASE_URL}/cities`);
        setCities(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    getCities();
  }, []);

  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export { CityProvider, CityContext };
