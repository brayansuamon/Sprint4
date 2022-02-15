import { React, createContext, useState } from "react";

const AppContext = createContext(null);

const StateContext = ({ children }) => {
  const USER_INITIAL = {
    uid: "",
  };

  const [userLog, setUserLog] = useState(USER_INITIAL);

  // useEffect(() => {
  //   const unsubscribeAuth = auth.onAuthStateChanged((user) => {
  //     setUserLog(user || USER_INITIAL);
  //   });
  //   return () => {
  //     unsubscribeAuth();
  //   };
  // }, []);

  return (
    <AppContext.Provider value={{ userLog, setUserLog, USER_INITIAL }}>
      {children}
    </AppContext.Provider>
  );
};

export { StateContext, AppContext };
