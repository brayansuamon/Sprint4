import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/getData";

const AppContext = createContext(null);

const USER_INITIAL = {
  uid: "",
};

const StateContext = ({ children }) => {
  const [userLog, setUserLog] = useState(USER_INITIAL);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setUserLog(user || USER_INITIAL);
    });
    return () => {
      unsubscribeAuth();
    };
  }, []);

  return (
    <AppContext.Provider value={{ userLog, setUserLog }}>
      {children}
    </AppContext.Provider>
  );
};

export default StateContext;
