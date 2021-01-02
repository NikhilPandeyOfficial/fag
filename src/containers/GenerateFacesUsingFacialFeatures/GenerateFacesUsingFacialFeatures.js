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
import { generateFace } from "./../../services";
// bootstrap
import { Container, Row, Col } from "react-bootstrap";

import Canvas from "./../../components/Canvas/Canvas";

const ageList = [
    "0-2yrs",
    "4-6yrs",
    "8-12yrs",
    "15-20yrs",
    "25-32yrs",
    "38-43yrs",
    "48-53yrs",
    "60-100yrs",
  ],
  genderList = ["Male", "Female"],
  raceList = ["Asian", "Black", "Hispanic", "Indian", "White"],
  hairColorList = ["Black", "Blonde", "Brown", "Gray"],
  facialHairList = ["Beard", "No-Beard"],
  eyeGlassesList = ["EyeGlasses", "No-EyeGlasses"];

const GenerateFacesUsingFacialFeatures = (props) => {
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [race, setRace] = useState(null);
  const [hairColor, setHairColor] = useState(null);
  const [facialHair, setFacialHair] = useState(null);
  const [eyeGlasses, setEyeGlasses] = useState(null);

  const [prediction, setPrediction] = useState(null);

  const [error, setError] = useState("");
  const [isResultLoading, setIsResultLoading] = useState(false);

  const [filterClasses, setFilterClasses] = useState(styles.hideFilters);

  const submitHandler = async () => {
    try {
      setIsResultLoading(true);
      setError("");
      setPrediction(null);
      console.log("In submit handler");

      const facialInputs = {
        age,
        gender,
        race,
        hairColor,
        facialHair,
        eyeGlasses,
      };

      console.log(facialInputs);
      const prediction = await generateFace(facialInputs);
      setPrediction(prediction);
    } catch (error) {
      console.log(error);
      // display some sort of popup etc to display error
      setError("Something went wrong!");
    }
    setIsResultLoading(false);
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

  if (isResultLoading) {
    // show loading circle here
    // return ()
  }

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
                  options={genderList}
                  onChange={(gender) => {
                    setGender(gender);
                  }}
                ></FilterCard>

                {/* Age */}
                <FilterCard
                  close={closeHandler}
                  name={"age"}
                  options={ageList}
                  onChange={(age) => {
                    setAge(age);
                  }}
                ></FilterCard>

                {/* Race */}
                <FilterCard
                  close={closeHandler}
                  name={"race"}
                  options={raceList}
                  onChange={(race) => {
                    setRace(race);
                  }}
                ></FilterCard>

                {/* Hair color */}
                <FilterCard
                  close={closeHandler}
                  name="hair color"
                  options={hairColorList}
                  onChange={(hairColor) => {
                    setHairColor(hairColor);
                  }}
                ></FilterCard>

                {/* Eye Glasses */}
                <FilterCard
                  close={closeHandler}
                  name={"eye glasses"}
                  options={eyeGlassesList}
                  onChange={(val) => {
                    setEyeGlasses(val);
                  }}
                ></FilterCard>

                {/* Facial Hair */}
                <FilterCard
                  close={closeHandler}
                  name={"facial hair"}
                  options={facialHairList}
                  onChange={(val) => {
                    setFacialHair(val);
                  }}
                ></FilterCard>
              </React.Fragment>

              {error && <div>This is error statement</div>}
              {/* Button */}
              <div className={styles.btnContainer}>
                <div className={styles.btn} onClick={submitHandler}>
                  {"Generate"}
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
