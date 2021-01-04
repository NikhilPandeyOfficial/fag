import React, { useState, useEffect, useRef } from "react";
import {
  ExpandLess as ExpandLessIcon,
  Face as FaceIcon,
  FilterListRounded as FilterIcon,
  CloseRounded as Close,
} from "@material-ui/icons";
import _ from "lodash";

import FilterCard from "../../components/FilterCard/FilterCard";
import FaceCard from "../../components/FaceCard/Facecard";
import Filter from "../../components/Filter/Filter";
import styles from "./GenerateFacesUsingFacialFeatures.module.css";
import { generateFace } from "./../../services";
import Loader from "../../components/Loader/Loader";
// bootstrap
import { Container, Row, Col } from "react-bootstrap";
import { inputArrayMaker } from "../../servicesInputArrayMaker";
import { arrayUpdater } from "../../servicesArrayUpdater";
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

  const [prediction, setPrediction] = useState([]);

  const [error, setError] = useState("");
  const [filterClasses, setFilterClasses] = useState(styles.hideFilters);
  const [loader, setLoader] = useState(null);
  const [disableFacialHair, setDisableFacialHair] = useState(false);

  // testing
  const [pastFacialInputs, setPastFacialInputs] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [pastArrayCollection, setPastArrayCollection] = useState(null);

  useEffect(() => {
    if (gender == "Female") setDisableFacialHair(true);
    else setDisableFacialHair(false);
  }, [gender]);

  const submitHandler = async () => {
    try {
      showFiltersHandler();
      setLoader(<Loader></Loader>);
      setError("");
      // setPrediction([]);

      const facialInputs = {
        age,
        gender,
        race,
        hairColor,
        facialHair,
        eyeGlasses,
      };

      const face = Object.keys(facialInputs).map((key) => facialInputs[key]);
      // console.log(face, pastFacialInputs, pastArrayCollection[0]);

      // console.log(arrayUpdater(face, pastFacialInputs, pastArrayCollection[0]));

      // OLD CODE
      // for (let i = 0; i < 5; i++) {
      //   const pred = await generateFace(facialInputs);
      //   await setPrediction([...prediction, pred]);
      // }

      // NEW CODE
      const newPred = [];
      const store = [];
      setPrediction([...newPred]);

      if (pastArrayCollection == null) {
        for (let i = 0; i < 15; i++) {
          let inputArray = inputArrayMaker(facialInputs);
          const pred = await generateFace(inputArray);
          newPred.push(pred);
          store.push(inputArray);
        }
      } else {
        for (let i = 0; i < 15; i++) {
          let inputArray = arrayUpdater(
            face,
            pastFacialInputs,
            pastArrayCollection[i]
          );
          const pred = await generateFace(inputArray);
          newPred.push(pred);
          store.push(inputArray);
        }
      }

      setPastArrayCollection([...store]);
      setPrediction([...newPred]);
      setPastFacialInputs([
        ...Object.keys(facialInputs).map((key) => facialInputs[key]),
      ]);
    } catch (error) {
      console.log(error);
      // display some sort of popup etc to display error
      setError("Something went wrong!");
    }
    setLoader(null);
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
            <Container className={styles.stableScroll}>
              {/* Filters */}
              <React.Fragment>
                {/* Gender */}
                <FilterCard
                  disable={false}
                  close={closeHandler}
                  name={"gender"}
                  options={genderList}
                  onChange={(gender) => {
                    setGender(gender);
                  }}
                ></FilterCard>

                {/* Age */}
                <FilterCard
                  disable={false}
                  close={closeHandler}
                  name={"age"}
                  options={ageList}
                  onChange={(age) => {
                    setAge(age);
                  }}
                ></FilterCard>

                {/* Race */}
                <FilterCard
                  disable={false}
                  close={closeHandler}
                  name={"race"}
                  options={raceList}
                  onChange={(race) => {
                    setRace(race);
                  }}
                ></FilterCard>

                {/* Hair color */}
                <FilterCard
                  disable={false}
                  close={closeHandler}
                  name="hair color"
                  options={hairColorList}
                  onChange={(hairColor) => {
                    setHairColor(hairColor);
                  }}
                ></FilterCard>

                {/* Eye Glasses */}
                <FilterCard
                  disable={false}
                  close={closeHandler}
                  name={"eye glasses"}
                  options={eyeGlassesList}
                  onChange={(val) => {
                    setEyeGlasses(val);
                  }}
                ></FilterCard>

                {/* Facial Hair */}
                <FilterCard
                  disable={disableFacialHair}
                  close={closeHandler}
                  name={"facial hair"}
                  options={facialHairList}
                  onChange={(val) => {
                    setFacialHair(val);
                  }}
                ></FilterCard>
              </React.Fragment>

              {error && <div className={styles.error}>{error}</div>}
              {/* Button */}
              <div className={styles.btnContainer}>
                <div className={styles.btn} onClick={submitHandler}>
                  {"Generate"}
                </div>
              </div>
            </Container>
          </Col>
          <Col className={styles.col_results}>
            <Container className={styles.resultContainer}>
              <Row className={styles.resultRow}>
                {loader}
                {prediction &&
                  _.map(prediction, (val, ind) => (
                    <Canvas prediction={val} key={`canvas${ind}`} />
                  ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GenerateFacesUsingFacialFeatures;
