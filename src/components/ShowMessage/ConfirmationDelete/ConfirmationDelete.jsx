import { deleteDoc, doc } from "firebase/firestore";
import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { AppContext } from "../../../context/AppContext";
import { db } from "../../../firebase/getData";
import styles from "./ConfirmationDelete.module.scss";

const ConfirmationDelete = () => {
  //import dispatch of context
  const { state, dispatch } = useContext(AppContext);

  const cancelDeleteTweet = () => {
    //Restate initial state of tweet to delete
    dispatch({ type: "tweetToDelete", payload: "" });
    //Close open modal
    dispatch({ type: "openConfirmation", payload: false });
  };

  const handlerDeteleTweet = async () => {
    //Delete Tweet from Firebase
    await deleteDoc(doc(db, "Tweets", state.tweetToDelete));

    //Close open modal
    dispatch({ type: "openConfirmation", payload: false });
  };
  return createPortal(
    <div className={styles.confirmation}>
      <button className={styles.header} onClick={cancelDeleteTweet}>
        X
      </button>
      <h1 className={styles.body}>
        Are you sure that you want to delete this tweet?
      </h1>
      <button className={styles.continue} onClick={handlerDeteleTweet}>
        CONTINUE
      </button>
      <button className={styles.cancel} onClick={cancelDeleteTweet}>
        CANCEL
      </button>
    </div>,
    document.getElementById("portal")
  );
};

export default ConfirmationDelete;
