import React from "react";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { auth, login, logout } from "../../firebase/getData";
export default function Header(params) {
  /* function INITIAL_USER(params) {
    uid: "";
  }*/

  //User Login
  const [userLog, setUserLog] = useState(null);

  //useEffect to UserLogin
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserLog(user);
      console.log(user);
    });

    return () => {};
  }, []);

  return (
    <section>
      {userLog ? (
        <>
          <header className={styles.header}>
            <span>{userLog.displayName}</span>
            <button onClick={logout}>Logout</button>
          </header>
          <section className={styles.profile}>
            <img src={userLog.photoURL} alt="UserLogged" />
            <span>{userLog.email}</span>
          </section>
        </>
      ) : (
        <div className={styles.login}>
          <button onClick={login}>Login con Google</button>
        </div>
      )}
    </section>
  );
}
