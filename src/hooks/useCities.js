import { useContext } from "react";

import { CityContext } from "../providers/CityProvider";

const useCities = () => {
  const context = useContext(CityContext);
  if (context === undefined)
    throw new Error("CityContext used outside of CityProvider");
  return context;
};

export default useCities;
