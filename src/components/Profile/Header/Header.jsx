import React, { useContext } from "react";
import styles from "./Header.module.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import { auth } from "../../../firebase/getData";
import Username from "./styled-components/Username";
import Imageuser from "./styled-components/Imageuser";
import { signOut } from "firebase/auth";
//We need import some images to avoid loading errors
import back from "/images/back.png";
import Logout from "/images/Logout.png";
export default function Header(params) {
  const { state, dispatch } = useContext(AppContext);

  //To navigate between pages
  let navigate = useNavigate();

  const logout = () => {
    //Clear useContext
    dispatch({ type: "INITIAL_STATE" });
    //LogOut user
    signOut(auth);
  };

  //Event to change class of two siblings
  const handleClass = (actual, sibling) => {
    actual.classList.remove(`${styles.inactive}`);
    actual.classList.add(`${styles.active}`);
    sibling.classList.remove(`${styles.active}`);
    sibling.classList.add(`${styles.inactive}`);
  };
  return (
    <section>
      {/* {state.userData.uid !== "" ? ( */}
      <div className={styles.navheader}>
        <header className={styles.header}>
          <span>
            <Link className={styles.Back} to="/PostMessage">
              <img src={back} alt="Back" />
              <div>{state.userData.username}</div>
            </Link>
          </span>
          <button onClick={logout}>
            <Link className={styles.Logout} to="/">
              <div> LOGOUT </div>
              <img src={Logout} alt="Log_out" />
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
        <nav className={styles.navprofile}>
          <button
            className={`${styles.underlined} ${styles.active}`}
            onClick={(e) => {
              handleClass(e.target, e.target.nextSibling);
              navigate("/Profile/post");
            }}
          >
            POST
          </button>

          <button
            className={`${styles.underlined} ${styles.inactive}`}
            onClick={(e) => {
              handleClass(e.target, e.target.previousSibling);
              navigate("/Profile/favorites");
            }}
          >
            FAVORITES
          </button>
        </nav>
      </div>
      {/*  ) : ( // <div className={styles.login}></div>
      )} */}
    </section>
  );
}
