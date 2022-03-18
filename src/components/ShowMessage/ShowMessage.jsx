import React, { useContext, useEffect, useState } from "react";
import styles from "./ShowMessage.module.scss";
import UserColor from "./styled-components/UserColor";
import { AppContext } from "../../context/AppContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/getData";

//Import images to avoid loading errors
import Like from "/images/Like.svg";
import Dislike from "/images/Dislike.svg";
import Delete from "/images/Delete.svg";
const ShowMessage = ({ ...tweet }) => {
  const { state, dispatch } = useContext(AppContext);
  //UseState to change the Heart color
  const [heartColor, setheartColor] = useState(false);

  //To show and hide delete option
  const deleteoption =
    state.userData.uid === tweet.uid
      ? `${styles.show_delete}`
      : `${styles.hide_delete}`;

  const handlerDelete = (tweetDelete) => {
    //Send id of tweet to delete
    dispatch({ type: "tweetToDelete", payload: tweetDelete });
    //Activate State of Open Confirmation
    dispatch({ type: "openConfirmation", payload: true });
  };
  //To show likes of tweets
  const HandlerLikes = async (id, likes = 0, followers, uid) => {
    const tweetRef = doc(db, "Tweets", id);
    //Search if follower Exist
    const followerExist = followers.some((follower) => follower === uid);

    //Take action
    if (followerExist) {
      //Destruct the array, Rest only take the followers without uid
      const [uid, ...rest] = followers;
      /* Catch index of uid
       const idDelete = followers.indexOf(uid);
       const removefollower = followers.splice(idDelete, 1);
       */

      //Send Followers to Db
      await updateDoc(tweetRef, {
        likes: likes - 1,
        followers: [...rest],
      });
    } else {
      //Send Followers to Db
      await updateDoc(tweetRef, {
        likes: likes + 1,
        followers: [...followers, uid],
      });
    }
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
      <button
        className={styles.heart_like}
        onClick={() => {
          HandlerLikes(
            tweet.id,
            tweet.likes,
            tweet.followers,
            state.userData.uid
          );
          //To change opposite in usestate
          setheartColor(!heartColor);
        }}
      >
        {/* {heartColor || tweet.followers.includes(state.userData.uid) ? ( */}
        {tweet.followers.includes(state.userData.uid) ? (
          <img src={Like} alt="Heart" />
        ) : (
          <img src={Dislike} alt="Heart" />
        )}
        <span className={styles.likes}>{tweet.likes ? tweet.likes : 0}</span>
      </button>
      <button
        className={`${styles.delete_tweet} ${deleteoption}`}
        onClick={() => {
          handlerDelete(tweet.id);
        }}
      >
        <img src={Delete} alt="Delete" />
      </button>
    </div>
  );
};

export default ShowMessage;
