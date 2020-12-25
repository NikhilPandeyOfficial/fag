import React, { useState } from "react";
// Bootstrap
import { Container, Row, Col } from "react-bootstrap";

import styles from "./ExtractFacialFeatures.module.css";
import UploadedImage from "../../components/UploadedImage/UploadedImage";
import { extractFeatures } from "./../../services";

const ExtractFacialFeatures = (props) => {
  const [selectedImage, setselectedImage] = useState(null);
  const [error, setError] = useState("");
  const [features, setFeatures] = useState(null);
  const [isResultLoading, setIsResultLoading] = useState(false);

  const submitHandler = async () => {
    try {
      setIsResultLoading(true);
      setError("");
      setFeatures(null);
      if (!selectedImage) {
        setError("Please select picture!");
        console.log(" image not selected ");
        return;
      }

      const fea = await extractFeatures(selectedImage);
      setFeatures(fea);
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
    <Container>
      <Row>
        <Col sm={6} className={styles.imageUpload}>
          <UploadedImage
            setImage={(image) => {
              setselectedImage(image);
            }}
            name="image"
          ></UploadedImage>
          <div className={styles.btnContainer}>
            <div onClick={() => submitHandler()} className={styles.btn}>
              Extract
            </div>
          </div>
        </Col>
        <Col className={styles.extractionResults}>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Value</th>
              </tr>
              <tr>
                <th>Age</th>
                <td>{features && features.age}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{features && features.gender}</td>
              </tr>
              <tr>
                <th>Ethnicity</th>
                <td>{features && features.race}</td>
              </tr>
              <tr>
                <th>Hair Color</th>
                <td>{features && features.hairColor}</td>
              </tr>
              <tr>
                <th>Eye Color</th>
                <td>{features && features.eyeColor}</td>
              </tr>
              <tr>
                <th>Beard</th>
                <td>{features && features.beard}</td>
              </tr>
            </thead>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default ExtractFacialFeatures;
