import React, { useContext, useState } from "react";
import styles from "./PostMessage.module.scss";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/getData";
const { body, header } = styles;

function PostMessage(params) {
  const { state } = useContext(AppContext);

  //To catch the tweets in the text area
  const [tweet, setTweet] = useState("");

  function handletext(e) {
    //Tweet typing
    setTweet(e.target.value);
  }
  async function sendTweet(params) {
    //Catch date of this moment to save tweet
    const today = new Date();
    const UNIXTweet = today.valueOf(); //Also, we can use Date.now()
    //Convert to Date String
    const dateTweet = new Date(UNIXTweet);
    //Options to show date
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    //Change the way to look the date
    const dateSend = dateTweet.toLocaleDateString("en-Co", options);

    //Object initial to save tweet
    const tweetSend = {
      color: state.userData.color,
      content: tweet,
      date: dateSend,
      id: state.userData.uid,
      username: state.userData.username,
    };

    try {
      await setDoc(doc(db, "Tweets", state.userData.uid), tweetSend);
    } catch (e) {
      console.error("Error adding document: ", e);
      return null;
    }
  }

  return (
    <div className={body}>
      <header className={header}>
        <Link className={styles.linkprofile} to="/Profile">
          <img
            className={styles.userphoto}
            src={state.userData.photo}
            alt="Username"
          />
        </Link>

        <img src="./images/image_logo_devs.png" alt="Logo_devs" />
        <img
          className={`${styles.textdev} ${styles.algo}`}
          src="./images/text_logo_devs.png"
          alt="Text_devs"
        />
      </header>
      <section className={styles.write_message}>
        <picture className={styles.user_message}>
          <Link to="/Profile">
            <img src={state.userData.photo} alt="username" />
          </Link>
        </picture>
        <section className={styles.section_message}>
          <textarea
            name="Whatsapp"
            id=""
            maxLength={200}
            placeholder="Type Something"
            value={tweet}
            onChange={handletext}
          ></textarea>
        </section>
        <aside className={styles.characters_message}>
          <p className={styles.num_characters}>{tweet.length}</p>
          <p className={styles.max_characters}>Max 200.</p>
        </aside>
        <aside className={styles.button_message}>
          <button onClick={sendTweet}>POST</button>
        </aside>
      </section>
    </div>
  );
}

export default PostMessage;
