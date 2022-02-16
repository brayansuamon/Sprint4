import React, { useContext } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../firebase/getData";
import { AppContext } from "../context/AppContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// Update a list of users from your database

function useLogin(params) {
  let navigate = useNavigate();

  //Customs Hooks are to return something
  const { dispatch } = useContext(AppContext);

  // Validate user
  const userValidation = async (data) => {
    const docRef = doc(db, "Users", data.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      navigate("/PostMessage");
    } else {
      addUser(data);
      navigate("/Nickname");
    }
  };

  const addUser = async (data) => {
    //I need create an object with the specific data to send Database
    try {
      await setDoc(doc(db, "Users", data.uid), data);
    } catch (e) {
      console.error("Error adding document: ", e);
      return null;
    }
  };

  const login = async () => {
    try {
      await signInWithPopup(auth, provider).then((data) => {
        const dataSend = {
          email: data.user.email,
          name: data.user.displayName,
          photo: data.user.photoURL,
          uid: data.user.uid,
        };
        dispatch({ type: "setUserData", payload: dataSend });
        userValidation(dataSend);
      });
    } catch (error) {
      console.log(error + "Error detectado");
    }
  };
  return login;
}
export default useLogin;
