import { React, createContext, useReducer } from "react";
import { INITIAL_STATE, reducer } from "../reducers/reducer";

const AppContext = createContext(null);

const StateContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { StateContext, AppContext };
