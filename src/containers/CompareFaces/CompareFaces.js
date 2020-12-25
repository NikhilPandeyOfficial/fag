import React, { useState } from "react";
// Bootstrap
import { Container, Row, Col } from "react-bootstrap";

import styles from "./CompareFaces.module.css";
import UploadedImage from "../../components/UploadedImage/UploadedImage";

const CompareFaces = (props) => {
  const [selectedImage1, setselectedImage1] = useState(null);
  const [selectedImage2, setselectedImage2] = useState(null);
  const [renderImage1, setRenderImage1] = useState(null);
  const [renderImage2, setRenderImage2] = useState(null);

  // const comparedDetails = useSelector((state) => state.faces.comparedDetails);

  const [error, setError] = useState("");

  const submitHandler = async () => {
    try {
      setError("");
      if (!selectedImage1 || !selectedImage2) {
        setError("Please select both pictures!");
        return;
      }

      // await facesActions.compareFaces(selectedImage1, selectedImage2);
    } catch (error) {
      console.log(error);
      // display some sort of popup etc to display error
      setError("Something went wrong!");
    }
  };

  return (
    <Container>
      <Row>
        <Col className={styles.imageContainer}>
          <UploadedImage name="image1"></UploadedImage>
        </Col>
        <Col className={styles.imageContainer}>
          <UploadedImage name="image2"></UploadedImage>
        </Col>
      </Row>
      <Row>
        <Col className={styles.btnContainer}>
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
