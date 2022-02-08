import React from "react";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { auth, login, logout } from "../../../firebase/getData";
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
        <div className={styles.navheader}>
          <header className={styles.header}>
            <span>
              <img src="./images/back.png" alt="" />
              {/* {userLog.displayName} */}
              brayansuamon
            </span>
            <button onClick={logout}>
              LOGOUT
              <img src="./images/Logout.png" alt="" />
            </button>
          </header>
          <section className={styles.profile}>
            <img src={userLog.photoURL} alt="UserLogged" />
            <span>
              {/* {userLog.email} */}
              brayansuamon
            </span>
          </section>
        </div>
      ) : (
        <div className={styles.login}>
          <button onClick={login}>Login con Google</button>
        </div>
      )}
    </section>
  );
}
