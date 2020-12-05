import React from "react";
import {
  ExpandLess as ExpandLessIcon,
  Face as FaceIcon,
} from "@material-ui/icons";

import { useSelector } from "react-redux";

import styles from "./GenerateFacesUsingFacialFeatures.module.css";

const GenerateFacesUsingFacialFeatures = (props) => {
  let filled = false;

  const facesArray = useSelector((state) => state.faces.generatedFaces);

  console.log(facesArray);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.filterCard}>
          <div className={styles.filterHead}>
            <div className={styles.filterName}>Eye Color</div>
            <div className={styles.collapseIconContainer}>
              <ExpandLessIcon className={styles.collapseIcon} />
            </div>
          </div>
          <hr />
          <div className={styles.filterContainer}>
            <div className={styles.filterCapsule}>Brown</div>
            <div className={styles.filterCapsule}>Blue</div>
            <div className={styles.filterCapsule}>Green</div>
            <div className={styles.filterCapsule}>Grey</div>
          </div>
        </div>

        <div className={styles.btnContainer}>
          <div className={styles.btn}> Generate </div>
        </div>
      </div>
      <div className={styles.right}>
        {!!filled && (
          <React.Fragment>
            <div className={styles.imageContainer}>
              <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/skin-1560971564.jpg?resize=480:*"
                className={styles.image}
              />
            </div>
            <div className={styles.imageContainer}></div>
            <div className={styles.imageContainer}></div>
          </React.Fragment>
        )}
        {!filled && (
          <div className={styles.centered}>
            <FaceIcon className={styles.faceIcon} />
            <div className={styles.msg}>Let's Make Some Faces!</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateFacesUsingFacialFeatures;
