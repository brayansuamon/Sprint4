import React, { useContext } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import { logout } from "../../../firebase/getData";
import Username from "./styled-components/Username";
import Imageuser from "./styled-components/Imageuser";
export default function Header(params) {
  const { state } = useContext(AppContext);

  return (
    <section>
      {/* {state.userData.uid !== "" ? ( */}
      <div className={styles.navheader}>
        <header className={styles.header}>
          <span>
            <Link className={styles.Back} to="/PostMessage">
              <img src="./images/back.png" alt="Back" />
              <div>{state.userData.username}</div>
            </Link>
          </span>
          <button onClick={logout}>
            <Link className={styles.Logout} to="/">
              <div> LOGOUT </div>
              <img src="./images/Logout.png" alt="Log_out" />
            </Link>
          </button>
        </header>
        <section className={styles.profile}>
          <Imageuser
            color={state.userData.color}
            src={state.userData.photo}
            alt="UserLogged"
          />
          <Username color={state.userData.color}>
            {state.userData.username}
          </Username>
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
      {/*  ) : ( // <div className={styles.login}></div>
      )} */}
    </section>
  );
}
