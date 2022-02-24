import React, { useContext, useEffect } from "react";
import styles from "./ShowMessage.module.scss";
import UserColor from "./styled-components/UserColor";
import { AppContext } from "../../context/AppContext";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/getData";

const ShowMessage = ({ ...tweet }) => {
  const { state } = useContext(AppContext);

  //To show and hide delete option
  const deleteoption =
    state.userData.uid === tweet.uid
      ? `${styles.show_delete}`
      : `${styles.hide_delete}`;

  const handlerDelete = async (tweetDelete) => {
    //Delete Tweet from Firebase
    await deleteDoc(doc(db, "Tweets", tweetDelete));
  };

  return (
    <div className={styles.show_message}>
      <img className={styles.image_username} src={tweet.photo} alt="User" />
      <header className={styles.header}>
        <UserColor color={tweet.color} className={styles.usercolor}>
          {tweet.username}
        </UserColor>
        <span className={styles.date}> - {tweet.date}</span>
      </header>
      <article className={styles.article}>{tweet.content}</article>
      <footer className={styles.heart_like}>
        <img src="./images/Dislike.svg" alt="Heart" />
        <span className={styles.likes}>NumLikes</span>
      </footer>
      <button
        className={`${styles.delete_tweet} ${deleteoption}`}
        onClick={() => {
          handlerDelete(tweet.id);
        }}
      >
        {/* <div className={styles.delete_tweet}> */}
        <img src="./images/Delete.svg" alt="Delete" />
      </button>
    </div>
  );
};

export default ShowMessage;
