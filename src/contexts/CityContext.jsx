import axios from "axios";

import { createContext, useCallback, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:8000";

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    case "cities/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case "rejected":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      throw new Error("Unknown action type");
  }
};

const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getCities() {
      try {
        dispatch({ type: "loading" });
        const res = await axios.get(`${BASE_URL}/cities`);
        dispatch({ type: "cities/loaded", payload: res.data });
      } catch (error) {
        dispatch({ type: "rejected", payload: error.message });
      }
    }
    getCities();
  }, []);

  const getCity = useCallback(
    async (id) => {
      if (Number(id) === currentCity.id) return;

      try {
        dispatch({ type: "loading" });
        const res = await axios.get(`${BASE_URL}/cities/${id}`);
        dispatch({ payload: res.data, type: "city/loaded" });
      } catch (error) {
        dispatch({ type: "rejected", payload: error.message });
      }
    },
    [currentCity.id]
  );

  const createCity = async (newCity) => {
    try {
      dispatch({ type: "loading" });
      const res = await axios.post(`${BASE_URL}/cities`, newCity);
      dispatch({ type: "cities/created", payload: res.data });
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  };

  const deleteCity = async (id) => {
    try {
      dispatch({ type: "loading" });
      await axios.delete(`${BASE_URL}/cities/${id}`);
      dispatch({ type: "city/deleted", payload: id });
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  };

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export { CitiesProvider, CitiesContext };
