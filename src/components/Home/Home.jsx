import React from "react";
import styles from "./Home.module.scss";

export default function Home(params) {
  return (
    <section className={styles.home}>
      <figure className={styles.image}>
        <img src="./images/logo_devs.svg" alt="Devs" />
      </figure>
      <form className={styles.signIn}>
        <h1>LOREM IPSUM DOLOR</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        <figure className={styles.google}>
          <img src="./images/Google.svg" alt="Google" />
          <button>Sign in with Google</button>
        </figure>
      </form>
    </section>
  );
}
