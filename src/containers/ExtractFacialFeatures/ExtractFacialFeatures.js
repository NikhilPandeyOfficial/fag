import React, { useState } from "react";
// Bootstrap
import { Container, Row, Col } from "react-bootstrap";

import styles from "./ExtractFacialFeatures.module.css";
import UploadedImage from "../../components/UploadedImage/UploadedImage";
import { extractFeatures } from "./../../services";
import Loader from "../../components/Loader/Loader";

const ExtractFacialFeatures = (props) => {
  const [selectedImage, setselectedImage] = useState(null);
  const [error, setError] = useState("");
  const [features, setFeatures] = useState(null);
  const [loader, setLoader] = useState(null);

  const submitHandler = async () => {
    setLoader(<Loader />);
    try {
      setError("");
      setFeatures(null);
      if (!selectedImage) {
        setError("Please select picture!");
        console.log(" image not selected ");
        setLoader(null);
        return;
      }

      const fea = await extractFeatures(selectedImage);
      setFeatures(fea);
    } catch (error) {
      console.log(error);
      // display some sort of popup etc to display error
      setError("Something went wrong!");
    }
    setLoader(null);
  };

  return (
    <Container className={styles.cont}>
      <Row>
        <Col sm={6} className={styles.imageUpload}>
          <UploadedImage
            setImage={(image) => {
              setselectedImage(image);
            }}
            name="image"
          ></UploadedImage>
          {error && <div className={styles.error}> {error}</div>}
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
                <th>Race</th>
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
      <Row>
        <Col>{loader}</Col>
      </Row>
    </Container>
  );
};

export default ExtractFacialFeatures;
