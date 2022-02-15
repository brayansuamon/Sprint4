import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { auth, login } from "../../firebase/getData";
import useLogin from "../../hooks/useLogin";
import styles from "./Home.module.scss";

export default function Home(params) {
  const { setUserLog, USER_INITIAL } = useContext(AppContext);
  const login = useLogin();

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setUserLog(user || USER_INITIAL);
    });
    return () => {
      unsubscribeAuth();
    };
  }, []);

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
