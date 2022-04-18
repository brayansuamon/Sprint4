import {
  collection,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { React, createContext, useReducer, useEffect } from "react";
import { db } from "../firebase/getData";
import { reducer } from "../reducers/reducer";
import getLocalStorage from "../utils/getLocalStorage";

const AppContext = createContext(null);

const INITIAL_STATE = {
  userData: {
    color: "",
    email: "",
    name: "",
    photo: "",
    uid: getLocalStorage("uid"),
    username: "",
  },
  loading: "",
  error: "",
  tweets: [],
  open: false,
  tweetToDelete: "",
};

const StateContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    //Bring Data User Logged
    const BringDataUser = async () => {
      const docRef = doc(db, "Users", INITIAL_STATE.userData.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        //Prepare object to send info Context
        console.log(docSnap.data(), docSnap.data().email);
        const dataSend = {
          color: docSnap.data().color,
          username: docSnap.data().username,
          email: docSnap.data().email,
          name: docSnap.data().name,
          photo: docSnap.data().photo,
        };
        //Send info to Context
        dispatch({ type: "setUserData", payload: dataSend });
      }
    };
    //Bring tweets to id
    const unsub = onSnapshot(collection(db, "Tweets"), (docs) => {
      const docTweets = [];
      docs.forEach((doc) => {
        docTweets.push(doc.data());
      });
      //Order Tweets by date
      //Slice is to create a copy of the array
      //Sort order dates
      const sortedTweets = docTweets
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      dispatch({ type: "getTweets", payload: sortedTweets });
    });
    BringDataUser();
    return () => {
      unsub();
      BringDataUser();
    };
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { StateContext, AppContext };
