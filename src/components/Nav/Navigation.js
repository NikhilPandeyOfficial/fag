import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

import { CloseRounded as Close, Dehaze as NavIcon } from "@material-ui/icons";

// bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Navigation = (props) => {
  const [navClass, setNavClass] = useState(styles.navMobileHide);

  const showMobileNavHandler = () => {
    if (navClass == styles.navMobileHide) setNavClass(styles.navMobileShow);
    else setNavClass(styles.navMobileHide);
  };
  return (
    <header className={styles.mainHeader}>
      <Container className={styles.cont}>
        <NavLink to="/" className={styles.logo} exact>
          F A G
        </NavLink>
        <NavLink
          className={styles.navItem}
          activeClassName={styles.active}
          to="/generate-faces-using-facial-features"
        >
          Generate Faces
        </NavLink>
        <NavLink
          className={styles.navItem}
          activeClassName={styles.active}
          to="/compare-faces"
        >
          Compare Faces
        </NavLink>
        <NavLink
          className={styles.navItem}
          activeClassName={styles.active}
          to="/extract-facial-features"
        >
          Extract Facial Features
        </NavLink>
        <div className={styles.navMobileBtn} onClick={showMobileNavHandler}>
          <NavIcon className={styles.navMobileIcon}></NavIcon>
        </div>
      </Container>

      {/* For mobile */}
      <div className={navClass}>
        {/* <div className={styles.closeBtn}>
          <Close
            className={styles.closeIcon}
            onClick={showMobileNavHandler}
          ></Close>
        </div> */}
        <Container className={styles.navMobileCont}>
          <NavLink
            onClick={showMobileNavHandler}
            className={styles.navItemMobile}
            activeClassName={styles.activeMobile}
            to="/generate-faces-using-facial-features"
          >
            Generate Faces
          </NavLink>
          <NavLink
            onClick={showMobileNavHandler}
            className={styles.navItemMobile}
            activeClassName={styles.activeMobile}
            to="/compare-faces"
          >
            Compare Faces
          </NavLink>
          <NavLink
            onClick={showMobileNavHandler}
            className={styles.navItemMobile}
            activeClassName={styles.activeMobile}
            to="/extract-facial-features"
          >
            Extract Facial Features
          </NavLink>
        </Container>
      </div>
    </header>
  );
};

export default Navigation;
