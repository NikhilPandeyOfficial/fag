import React, { useState } from "react";
// Bootstrap
import { Container, Row, Col } from "react-bootstrap";

import styles from "./CompareFaces.module.css";
import UploadedImage from "../../components/UploadedImage/UploadedImage";

const CompareFaces = (props) => {
  const [selectedImage1, setselectedImage1] = useState(null);
  const [selectedImage2, setselectedImage2] = useState(null);

  const [error, setError] = useState("");
  const [isResultLoading, setIsResultLoading] = useState(false);

  const submitHandler = async () => {
    try {
      setIsResultLoading(true);
      setError("");
      if (!selectedImage1 || !selectedImage2) {
        setError("Please select both pictures!");
        return;
      }
      // code
    } catch (error) {
      console.log(error);
      // display some sort of popup etc to display error
      setError("Something went wrong!");
    }
    setIsResultLoading(false);
  };

  if (isResultLoading) {
    // show loading circle here
    // return ()
  }

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
          {error && <div> This is error statemet </div>}
          <div className={styles.btn} onClick={submitHandler}>
            Compare
          </div>
        </Col>
      </Row>

      {/**you can use the table structure from 'ExtractFacialFeatures.js' for displaying info. */}
    </Container>
  );
};

export default CompareFaces;
