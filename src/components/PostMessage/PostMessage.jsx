import React from "react";
import styles from "./PostMessage.module.scss";

function PostMessage(params) {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <img src="./images/image_logo_devs.png" alt="Username" />
        <img src="./images/image_logo_devs.png" alt="Logo_devs" />
        <img
          className={styles.textdev}
          src="./images/text_logo_devs.png"
          alt="Text_devs"
        />
      </header>
      <section className={styles.write_message}>
        <picture className={styles.user_message}>
          <img src="./images/image_logo_devs.png" alt="" />
        </picture>
        <section className={styles.section_message}>
          <textarea
            name="Whatsapp"
            id=""
            maxLength={200}
            placeholder="Type Something"
          ></textarea>
        </section>
        <aside className={styles.characters_message}>
          <p>NumberCh</p>
          <p>Max 200.</p>
        </aside>
        <aside className={styles.button_message}>
          <button>POST</button>
        </aside>
      </section>
    </div>
  );
}

export default PostMessage;
