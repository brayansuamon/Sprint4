import React from "react";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { auth, login, logout } from "../../../firebase/getData";
import { Link } from "react-router-dom";
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
              <img src="./images/back.png" alt="Back" />
              {/* {userLog.displayName} */}
              brayansuamon
            </span>
            <button onClick={logout}>
              LOGOUT
              <img src="./images/Logout.png" alt="Log_out" />
            </button>
          </header>
          <section className={styles.profile}>
            <img src={userLog.photoURL} alt="UserLogged" />
            <span>
              {/* {userLog.email} */}
              brayansuamon
            </span>
          </section>
          <nav>
            <ul className={styles.navprofile}>
              <li>
                <Link className={styles.underlined} to="/post">
                  POST
                </Link>
              </li>
              <li>
                <Link className={styles.underlined} to="/favorites">
                  FAVORITES
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className={styles.login}>
          <button onClick={login}>Login con Google</button>
        </div>
      )}
    </section>
  );
}
