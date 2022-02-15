import React, { useContext } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/getData";
import { AppContext } from "../context/AppContext";

function useLogin(params) {
  //Customs Hooks are to return something

  const { setUserLog } = useContext(AppContext);

  const login = () =>
    signInWithPopup(auth, provider).then((data) => {
      setUserLog(data.user.uid);
      console.log(data.user.uid);
    });
  return login;
}
export default useLogin;
