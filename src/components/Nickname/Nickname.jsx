import React from "react";
import styles from "./Nickname.module.scss";
import { login } from "../../firebase/getData";

function Nickname(params) {
  return (
    <section className={styles.home}>
      <figure className={styles.image}>
        <img src="./images/logo_devs.svg" alt="Devs" />
      </figure>
      <form className={styles.signIn}>
        <h1>LOREM IPSUM DOLOR</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        <button onClick={login} className={styles.google}>
          <img src="./images/Google.svg" alt="Google" />
          <div>Sign in with Google</div>
        </button>
      </form>
    </section>
  );
}
export default Nickname;
