import React, { useState } from "react";
// Bootstrap
import { Container, Row, Col } from "react-bootstrap";

import { compareFaces } from "../../services";
import styles from "./CompareFaces.module.css";
import UploadedImage from "../../components/UploadedImage/UploadedImage";
import Loader from "../../components/Loader/Loader";

const CompareFaces = (props) => {
  const [selectedImage1, setselectedImage1] = useState(null);
  const [selectedImage2, setselectedImage2] = useState(null);

  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [loader, setLoader] = useState(null);

  const submitHandler = async () => {
    setLoader(<Loader />);
    try {
      setError("");
      setResult("");
      if (!selectedImage1 || !selectedImage2) {
        setError("Please select both pictures!");
        setLoader(null);
        return;
      }
      console.log("in submit handler");
      console.log(selectedImage1 + " " + selectedImage2);
      const res = await compareFaces(selectedImage1, selectedImage2);
      console.log(res);
      setResult(res.toFixed(1));
    } catch (e) {
      console.log(e);
      // display some sort of popup etc to display error
      setError("Something went wrong");
    }
    setLoader(null);
  };

  return (
    <Container className={styles.cont}>
      <Row>
        <Col className={styles.imageContainer}>
          <UploadedImage
            setImage={(image) => {
              setselectedImage1(image);
            }}
            name="image1"
          ></UploadedImage>
        </Col>
        <Col className={styles.imageContainer}>
          <UploadedImage
            setImage={(image) => {
              setselectedImage2(image);
            }}
            name="image2"
          ></UploadedImage>
        </Col>
      </Row>
      <Row>
        <Col className={styles.btnContainer}>
          <div className={styles.btn} onClick={submitHandler}>
            Compare
          </div>
          <Col>{error && <div className={styles.error}> {error} </div>}</Col>
        </Col>
      </Row>
      <Row>
        <Col className={styles.loader}>{loader}</Col>
      </Row>
      <Row>
        <Col className={styles.resultContainer}>
          {result && <div> {`${result} %`} </div>}
        </Col>
      </Row>

      {/**you can use the table structure from 'ExtractFacialFeatures.js' for displaying info. */}
    </Container>
  );
};

export default CompareFaces;
