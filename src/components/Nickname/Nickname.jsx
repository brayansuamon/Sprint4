import React from "react";
import styles from "./Nickname.module.scss";
import Colors from "./utils/Colors_username";
import Square from "./Squares/Squares";

function Nickname(params) {
  return (
    <section className={styles.home}>
      <figure className={styles.image}>
        <img src="./images/logo_devs.svg" alt="Devs" />
      </figure>
      <form className={styles.signIn}>
        <h1>
          WELCOME <span>Name!</span>
        </h1>
        <input type="text" placeholder="Type your username" />
        <h3>Select your favorite color</h3>

        <ul>
          {Colors.map((color) => {
            return <Square key={color.id} {...color} />;
          })}
        </ul>

        <button>CONTINUE</button>
      </form>
    </section>
  );
}
export default Nickname;
