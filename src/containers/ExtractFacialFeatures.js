import React from "react";

import styles from "./ExtractFacialFeatures.module.css";

const ExtractFacialFeatures = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <div className={styles.uploadContainer}></div>
        <div className={styles.btn}> Extract Features </div>
      </div>
      <div className={styles.featureContainer}>
        <div className={`${styles.featureBox} ${styles.featureHead}`}>
          <div className={styles.featureType}> Feature Type </div>
          <div className={styles.label}> Label </div>
        </div>
        <div className={styles.featureBox}>
          <div className={styles.featureType}> Eye Color </div>
          <div className={styles.label}> Black </div>
        </div>
        <div className={styles.featureBox}>
          <div className={styles.featureType}> Hair Length </div>
          <div className={styles.label}> Short </div>
        </div>
        <div className={styles.featureBox}>
          <div className={styles.featureType}> Ethnicity </div>
          <div className={styles.label}> AmerIndian </div>
        </div>
      </div>
    </div>
  );
};

export default ExtractFacialFeatures;
