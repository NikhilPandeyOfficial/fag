import React from "react";
import { Link } from "react-router-dom";

import styles from "./Homepage.module.css";

const Homepage = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.boxOuterContainer}>
        <div className={styles.boxInnerContainer}>
          <Link
            className={styles.box2}
            to="/generate-faces-using-facial-features"
          >
            <div>Generate Faces</div>
          </Link>
          <Link className={styles.box1} to="/compare-faces">
            <div>Compare Faces</div>
          </Link>
        </div>
        <div className={styles.boxInnerContainer}>
          <Link className={styles.box1} to="/extract-facial-features">
            <div>Extract Features</div>
          </Link>
          <Link className={styles.box2} href="#">
            <div>Extract Features</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
