import React, { useState } from "react";
import {
  ExpandLess as ExpandLessIcon,
  Face as FaceIcon,
  FilterListRounded as FilterIcon,
  CloseRounded as Close,
} from "@material-ui/icons";

import FaceCard from "../../components/FaceCard/Facecard";
import Filter from "../../components/Filter/Filter";

import { useSelector } from "react-redux";

import * as facesActions from "../../store/actions/faces";
import styles from "./GenerateFacesUsingFacialFeatures.module.css";

// bootstrap
import { Container, Row, Col } from "react-bootstrap";

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
  const [filterClasses, setFilterClasses] = useState(styles.hideFilters);

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

  const closeHandler = (event) => {
    // Handles the closing of the filter dropdown
    let details = document.querySelectorAll("details");

    let match = event.target.parentElement;
    details.forEach((detail) => {
      if (detail != match) detail.removeAttribute("open");
    });
  };

  const showFiltersHandler = () => {
    // Handles the disply of filter when window width
    // is less than 575px
    if (filterClasses == styles.hideFilters)
      setFilterClasses(styles.showFilters);
    else setFilterClasses(styles.hideFilters);
  };

  return (
    <div className={styles.cont}>
      <Container fluid={true}>
        <Row>
          <Col sm={12} className={styles.col_filterResponsive}>
            <div className={styles.filterBtn} onClick={showFiltersHandler}>
              <FilterIcon id="filters" className={styles.filterIcon} />
              <label htmlFor="filters">Filters</label>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3} className={filterClasses}>
            <div className={styles.closeBtn}>
              <Close
                className={styles.closeIcon}
                onClick={showFiltersHandler}
              ></Close>
            </div>
            <Container>
              {/* Filters */}
              <Filter close={closeHandler} />

              {/* Button */}
              <div className={styles.btnContainer}>
                <div className={styles.btn} onClick={submitHandler}>
                  {!isFirstTime ? "Modify Faces" : "Generate"}
                </div>
              </div>
            </Container>
          </Col>
          <Col className={styles.col_results}>
            <Container>
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
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GenerateFacesUsingFacialFeatures;
