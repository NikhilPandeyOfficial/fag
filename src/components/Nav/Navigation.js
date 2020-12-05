import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <header className={styles.mainHeader}>
      <NavLink to="/" className={styles.logo} exact>
        F A G
      </NavLink>
      <ul>
        <li>
          <NavLink to="/generate-faces-using-facial-features">
            Generate Faces
          </NavLink>
        </li>
        <li>
          <NavLink to="/compare-faces">Compare Faces</NavLink>
        </li>
        <li>
          <NavLink to="/extract-facial-features">
            Extract Facial Features
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
