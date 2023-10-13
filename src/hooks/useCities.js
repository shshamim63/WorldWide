import { useContext } from "react";

import { CitiesContext } from "../contexts/CityContext";

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext used outside of CityProvider");
  return context;
};

export default useCities;
