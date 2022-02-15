import React, { useContext } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/getData";
import { AppContext } from "../context/AppContext";

function useLogin(params) {
  //Customs Hooks are to return something

  const { dispatch } = useContext(AppContext);

  const login = () =>
    signInWithPopup(auth, provider).then((data) => {
      dispatch({ type: "setUserData", payload: data });
    });
  return login;
}
export default useLogin;
