import React from "react";

import styles from "./CompareFaces.module.css";

const CompareFaces = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <div className={styles.uploadContainer}></div>
        <div className={styles.uploadContainer}></div>
      </div>
      <div className={styles.btn}> Compare </div>
    </div>
  );
};

export default CompareFaces;
