import React, { useState } from "react";
import { useSelector } from "react-redux";

import styles from "./CompareFaces.module.css";

const CompareFaces = (props) => {
  const [selectedImage1, setselectedImage1] = useState(null);
  const [selectedImage2, setselectedImage2] = useState(null);

  const comparedDetails = useSelector((state) => state.faces.comparedDetails);

  const [error, setError] = useState("");

  const submitHandler = async () => {
    try {
      setError("");
      if (!selectedImage1 || !selectedImage2) {
        setError("Please select both pictures!");
        return;
      }

      await facesActions.compareFaces(selectedImage1, selectedImage2);
    } catch (error) {
      console.log(error);
      // display some sort of popup etc to display error
      setError("Something went wrong!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <div className={styles.uploadContainer}>
          {/* handle according to design for 1st upload
        <input
          type="file"
          value={selectedImage1}
          onChange={(e) => setselectedImage1(e.target.files[0])}
        />*/}
        </div>
        <div className={styles.uploadContainer}>
          {/* handle according to design for 2nd upload
        <input
          type="file"
          value={selectedImage2}
          onChange={(e) => setselectedImage2(e.target.files[0])}
        />*/}
        </div>
      </div>
      <div className={styles.btn} onClick={submitHandler}>
        Compare
      </div>

      {/**you can use the table structure from 'ExtractFacialFeatures.js' for displaying info. */}
    </div>
  );
};

export default CompareFaces;
