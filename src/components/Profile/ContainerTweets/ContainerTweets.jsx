import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import ConfirmationDelete from "../../ShowMessage/ConfirmationDelete/ConfirmationDelete";
import ShowMessage from "../../ShowMessage/ShowMessage";
import styles from "./ContainerTweets.module.scss";

const ContainerTweets = ({ tweets }) => {
  //Import state of opem
  const { state } = useContext(AppContext);
  return (
    <section className={styles.footer}>
      {tweets.length > 0 &&
        tweets.map((tweet) => {
          return <ShowMessage key={tweet.id} {...tweet} />;
        })}
      {state.open && <ConfirmationDelete />}
    </section>
  );
};

export default ContainerTweets;
