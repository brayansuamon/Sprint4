import React from "react";
import useLogin from "../../hooks/useLogin";
import styles from "./Home.module.scss";

export default function Home(params) {
  const login = useLogin();

  //button type="button" is to prevent default
  //Also we can add e.preventDefault() in Onclick function
  return (
    <section className={styles.home}>
      <figure className={styles.image}>
        <img src="./images/logo_devs.svg" alt="Devs" />
      </figure>
      <form className={styles.signIn}>
        <h1>LOREM IPSUM DOLOR</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        <button onClick={login} type="button" className={styles.google}>
          <img src="./images/Google.svg" alt="Google" />
          <div>Sign in with Google</div>
        </button>
      </form>
    </section>
  );
}
