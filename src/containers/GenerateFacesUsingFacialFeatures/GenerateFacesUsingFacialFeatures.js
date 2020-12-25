import React, { useState, useEffect, useRef } from "react";
import {
  ExpandLess as ExpandLessIcon,
  Face as FaceIcon,
  FilterListRounded as FilterIcon,
  CloseRounded as Close,
} from "@material-ui/icons";

import FilterCard from "../../components/FilterCard/FilterCard";
import FaceCard from "../../components/FaceCard/Facecard";
import Filter from "../../components/Filter/Filter";
import styles from "./GenerateFacesUsingFacialFeatures.module.css";
import {
  generateFace,
  ageMapping,
  genderMapping,
  raceMapping,
  eyeColorMapping,
  hairColorMapping,
  beardMapping,
} from "../../services";
// bootstrap
import { Container, Row, Col } from "react-bootstrap";

import Canvas from "./../../components/Canvas/Canvas";

const getKeyByValue = (obj, value) => {
  return Number.parseInt(Object.keys(obj).find((key) => obj[key] === value));
};

const GenerateFacesUsingFacialFeatures = (props) => {
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [ethnicity, setEthnicity] = useState(null);
  const [eyeColor, setEyeColor] = useState(null);
  const [hairColor, setHairColor] = useState(null);
  const [facialHair, setFacialHair] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const [error, setError] = useState("");
  const [isFirstTime, setIsFirstTime] = useState(true);

  const [filterClasses, setFilterClasses] = useState(styles.hideFilters);

  const submitHandler = async () => {
    try {
      setError("");
      console.log("In submit handler");

      const facialInputs = {
        age: getKeyByValue(ageMapping, age),
        gender: getKeyByValue(genderMapping, gender),
        ethnicity: getKeyByValue(raceMapping, ethnicity),
        eyeColor: getKeyByValue(eyeColorMapping, eyeColor),
        hairColor: getKeyByValue(hairColorMapping, hairColor),
        facialHair: getKeyByValue(beardMapping, facialHair),
      };

      console.log(Object.values(facialInputs));
      const prediction = await generateFace(Object.values(facialInputs));
      setPrediction(prediction);
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
              <React.Fragment>
                {/* Gender */}
                <FilterCard
                  close={closeHandler}
                  name={"gender"}
                  options={Object.values(genderMapping)}
                  onChange={(gender) => {
                    setGender(gender);
                  }}
                ></FilterCard>

                {/* Age */}
                <FilterCard
                  close={closeHandler}
                  name={"age"}
                  options={Object.values(ageMapping)}
                  onChange={(age) => {
                    setAge(age);
                  }}
                ></FilterCard>

                {/* Ethnicity */}
                <FilterCard
                  close={closeHandler}
                  name={"ethnicity"}
                  options={Object.values(raceMapping)}
                  onChange={(ethnicity) => {
                    setEthnicity(ethnicity);
                  }}
                ></FilterCard>

                {/* Hair color */}
                <FilterCard
                  close={closeHandler}
                  name="hair color"
                  options={Object.values(hairColorMapping)}
                  onChange={(hairColor) => {
                    setHairColor(hairColor);
                  }}
                ></FilterCard>

                {/* Eye Color */}
                <FilterCard
                  close={closeHandler}
                  name={"eye color"}
                  options={Object.values(eyeColorMapping)}
                  onChange={(eyeColor) => {
                    setEyeColor(eyeColor);
                  }}
                ></FilterCard>

                {/* Facial Hair */}
                <FilterCard
                  close={closeHandler}
                  name={"facial hair"}
                  options={Object.values(beardMapping)}
                  onChange={(facialHair) => {
                    setFacialHair(facialHair);
                  }}
                ></FilterCard>
              </React.Fragment>

              {/* Button */}
              <div className={styles.btnContainer}>
                <div className={styles.btn} onClick={submitHandler}>
                  {isFirstTime ? "Generate" : "Modify Faces"}
                </div>
              </div>
            </Container>
          </Col>
          <Col className={styles.col_results}>
            <Container>
              {!prediction && (
                <div className={styles.centered}>
                  <FaceIcon className={styles.faceIcon} />
                  <div className={styles.msg}>Let's Make Some Faces!</div>
                </div>
              )}
              {prediction && <Canvas prediction={prediction} />}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GenerateFacesUsingFacialFeatures;
