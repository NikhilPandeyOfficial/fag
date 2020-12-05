import React, { useState } from "react";
import {
  ExpandLess as ExpandLessIcon,
  Face as FaceIcon,
} from "@material-ui/icons";

import { useSelector } from "react-redux";

import * as facesActions from "../store/actions/faces";
import styles from "./GenerateFacesUsingFacialFeatures.module.css";

const GenerateFacesUsingFacialFeatures = (props) => {
  const facesArray = useSelector((state) => state.faces.generatedFaces);

  const [eyeColor, setEyeColor] = useState(null);
  const [hairColor, setHairColor] = useState(null);
  const [ethnicity, setEthnicity] = useState(null);
  const [gender, setGender] = useState(null);
  const [hairLength, setHairLength] = useState(null);
  const [error, setError] = useState("");

  const isFacesArrayFilled = facesArray.length != 0;
  const [isFirstTime, setIsFirstTime] = useState(true);

  const submitHandler = async () => {
    setIsFirstTime(false);
    return;
    try {
      setError("");
      if (!eyeColor || !hairColor || !ethnicity || !gender || !hairLength) {
        setError("Please select from each feature!");
        return;
      }

      const facialInputs = {
        eyeColor,
        hairColor,
        ethnicity,
        gender,
        hairLength,
      };

      await facesActions.generateFaces(facialInputs);
    } catch (error) {
      console.log(error);
      // display some sort of popup etc to display error

      setError("Something went wrong!");
    }
    setIsFirstTime(false);
  };

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
          <div className={styles.btn} onClick={submitHandler}>
            {!isFirstTime ? "Generate" : "Modify Faces"}
          </div>
        </div>
      </div>
      <div className={styles.right}>
        {!!isFacesArrayFilled && (
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
        {!isFacesArrayFilled && (
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
