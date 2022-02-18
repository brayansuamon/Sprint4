import { doc, getDoc } from "firebase/firestore";
import { React, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { db } from "../../firebase/getData";
import Header from "./Header/Header";

function Profile() {
  const { state, dispatch } = useContext(AppContext);
  const BringData = async () => {
    //Bring Data
    const docRef = doc(db, "Users", state.userData.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      //Prepare object to send info Context
      const dataSend = {
        color: docSnap.data().color,
        username: docSnap.data().username,
      };
      //Send info to Context
      dispatch({ type: "setUserData", payload: dataSend });
    }
  };
  BringData();
  return (
    <body>
      <Header />
    </body>
  );
}

export default Profile;
