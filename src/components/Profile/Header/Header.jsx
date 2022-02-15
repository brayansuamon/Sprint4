import React, { useContext } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import { logout } from "../../../firebase/getData";
export default function Header(params) {
  const { state } = useContext(AppContext);
  console.log(state);
  return (
    <section>
      {state.userData.uid !== "" ? (
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
            <img src={state.userData.photoURL} alt="UserLogged" />
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
        <div className={styles.login}></div>
      )}
    </section>
  );
}
