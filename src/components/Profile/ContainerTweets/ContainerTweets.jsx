import React from "react";
import ShowMessage from "../../ShowMessage/ShowMessage";
import styles from "./ContainerTweets.module.scss";

const ContainerTweets = ({ tweets }) => {
  return (
    <section className={styles.footer}>
      {tweets.length > 0 &&
        tweets.map((tweet) => {
          return <ShowMessage key={tweet.id} {...tweet} />;
        })}
    </section>
  );
};

export default ContainerTweets;
