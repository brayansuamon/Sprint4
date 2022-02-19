import React, { useContext, useState } from "react";
import styles from "./PostMessage.module.scss";
import { AppContext } from "../../context/AppContext";
const { body, header } = styles;

function PostMessage(params) {
  const { state } = useContext(AppContext);

  //To catch the tweets in the text area
  const [tweet, setTweet] = useState("");

  function handletext(e) {
    setTweet(e.target.value);
  }

  return (
    <div className={body}>
      <header className={header}>
        <img
          className={styles.userphoto}
          src={state.userData.photo}
          alt="Username"
        />
        <img src="./images/image_logo_devs.png" alt="Logo_devs" />
        <img
          className={`${styles.textdev} ${styles.algo}`}
          src="./images/text_logo_devs.png"
          alt="Text_devs"
        />
      </header>
      <section className={styles.write_message}>
        <picture className={styles.user_message}>
          <img src={state.userData.photo} alt="username" />
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
          <button>POST</button>
        </aside>
      </section>
    </div>
  );
}

export default PostMessage;
