import React from "react";
import ErrorImage from "/images/ErrorImage.png";
import styles from "./NotFound.module.scss";
const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <img src={ErrorImage} alt="Not Found" />
    </div>
  );
};

export default NotFound;
