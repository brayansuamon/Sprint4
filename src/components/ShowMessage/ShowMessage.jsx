import React from "react";
import styles from "./ShowMessage.module.scss";

const ShowMessage = () => {
  return (
    <div className={styles.show_message}>
      <img className={styles.image_username} src="" alt="Username" />
      <header className={styles.header}>Username</header>
      <article className={styles.article}>
        We are building the message section
      </article>
      <footer className={styles.heart_like}>
        <img src="./images/Dislike.svg" alt="Heart" />
        <span className={styles.likes}>NumLikes</span>
      </footer>
      <div className={styles.delete_tweet}>
        <img src="./images/Delete.svg" alt="Delete" />
      </div>
    </div>
  );
};

export default ShowMessage;
