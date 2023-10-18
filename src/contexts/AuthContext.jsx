import axios from "axios";
import { createContext, useReducer } from "react";

const BASE_URL = "http://localhost:8000";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "logout":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case "login/failed":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    default:
      throw new Error("Undefined action");
  }
};

const AuthContext = createContext();

//will be removed after backend setup

const authenicateUser = (users, email) => {
  const currentUser = users.filter((user) => user.email === email);
  if (currentUser?.length) return currentUser[0];
  return false;
};

const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const login = async ({ email, passowrd }) => {
    try {
      const res = await axios.get(`${BASE_URL}/users`);
      const currentUser = authenicateUser(res.data, email);

      if (currentUser) {
        if (currentUser.passowrd === passowrd) {
          dispatch({
            type: "login",
            payload: currentUser,
          });
        } else {
          dispatch({ type: "login/failed", payload: "Invalid password" });
        }
      } else {
        dispatch({ type: "login/failed", payload: "User does not exist" });
      }
    } catch (error) {
      dispatch({ type: "login/failed", payload: "Authentication failed" });
    }
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, user, isAuthenticated, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
