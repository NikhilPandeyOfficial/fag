import React, { useState } from "react";
import { useSelector } from "react-redux";

import styles from "./ExtractFacialFeatures.module.css";

import UploadedImage from "../../components/UploadedImage/UploadedImage";

// Bootstrap
import { Container, Row, Col } from "react-bootstrap";

const ExtractFacialFeatures = (props) => {
  const [selectedImage, setselectedImage] = useState(null);
  const [error, setError] = useState("");

  const comparedDetails = useSelector(
    (state) => state.faces.extractedFacialDetails
  );

  const submitHandler = async () => {
    try {
      setError("");
      if (!selectedImage) {
        setError("Please select picture!");
        return;
      }

      await facesActions.extractFacialFeatures(selectedImage);
    } catch (error) {
      console.log(error);
      // display some sort of popup etc to display error
      setError("Something went wrong!");
    }
  };

  return (
    <Container>
      <Row>
        <Col sm={6} className={styles.imageUpload}>
          <UploadedImage name="image"></UploadedImage>
          <div className={styles.btnContainer}>
            <div className={styles.btn}>Extract</div>
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
                <td></td>
              </tr>
              <tr>
                <th>Gender</th>
                <td></td>
              </tr>
              <tr>
                <th>Ethnicity</th>
                <td></td>
              </tr>
              <tr>
                <th>Hair Color</th>
                <td></td>
              </tr>
              <tr>
                <th>Eye Color</th>
                <td></td>
              </tr>
              <tr>
                <th>Beard</th>
                <td></td>
              </tr>
            </thead>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default ExtractFacialFeatures;
