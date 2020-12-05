import React from "react";

import styles from "./ExtractFacialFeatures.module.css";

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
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <div className={styles.uploadContainer}>
          {/* handle image upload to design for 1st upload
        <input
          type="file"
          value={selectedImage1}
          onChange={(e) => setselectedImage1(e.target.files[0])}
        />*/}
        </div>

        <div className={styles.btn}> Extract Features </div>
      </div>
      <div className={styles.featureContainer}>
        <div className={`${styles.featureBox} ${styles.featureHead}`}>
          <div className={styles.featureType}> Feature Type </div>
          <div className={styles.label}> Label </div>
        </div>
        <div className={styles.featureBox}>
          <div className={styles.featureType}> Eye Color </div>
          <div className={styles.label}> Black </div>
        </div>
        {/**display compared Details using map function using css classes */}
      </div>
    </div>
  );
};

export default ExtractFacialFeatures;
