import React, { useContext, useState } from "react";
import styles from "./Nickname.module.scss";
import Colors from "./utils/Colors_username";
import Square from "./styled-components/Squares/Squares";
import Name from "./styled-components/Name/Name";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/getData";

function Nickname(params) {
  //Bring state of user logged
  const { state, dispatch } = useContext(AppContext);

  //To catch color information (selected)
  let colorinfo = {
    id: "",
    value: "",
    name: "",
  };
  //To cath username and Color selected
  const [usernameselected, setUsername] = useState("");
  const [colorselected, setColor] = useState(colorinfo);

  //To navigate between pages
  let navigate = useNavigate();

  function handleinput(e) {
    setUsername(e.target.value);
  }
  function handleColor(idColor, valueColor, nameColor) {
    setColor((prev) => {
      return {
        ...prev,
        id: idColor,
        value: valueColor,
        name: nameColor,
      };
    });
  }

  //Send info to Firebase
  const sendUsernameColor = async () => {
    if (colorselected.value.length > 0 && usernameselected.length > 0) {
      //Create an object to send
      const dataSend = {
        color: colorselected.value,
        username: usernameselected,
      };
      //Send info to context
      dispatch({ type: "setUserData", payload: dataSend });
      //Send info to db
      try {
        const userSelected = doc(db, "Users", state.userData.uid);
        await updateDoc(userSelected, dataSend);
      } catch (e) {
        console.error("Error adding document: ", e);
        return null;
      }
      //To go forward
      navigate("/PostMessage");
    } else {
      alert("Debes digitar un usuario y seleccionar un color");
    }
  };
  return (
    <section className={styles.home}>
      <figure className={styles.image}>
        <img src="./images/logo_devs.svg" alt="Devs" />
      </figure>
      <form className={styles.signIn}>
        <h1>
          WELCOME <Name color={colorselected.value}>{usernameselected}!</Name>
        </h1>
        <input
          type="text"
          placeholder="Type your username"
          maxLength={20}
          onChange={(e) => handleinput(e)}
        />
        <h3>
          Select your favorite color:
          <Name color={"transparent"} style={{ color: colorselected.value }}>
            {colorselected.name}
          </Name>
        </h3>

        <ul>
          {Colors.map((color) => {
            return (
              <Square key={color.id} {...color} handleColor={handleColor} />
            );
          })}
        </ul>
        <button type="button" onClick={sendUsernameColor}>
          CONTINUE
        </button>
      </form>
    </section>
  );
}
export default Nickname;
