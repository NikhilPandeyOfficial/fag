import React, { useState, useEffect } from "react";

import styles from "./UploadedImage.module.css";

const uploadedImage = (props) => {
  const [renderImage, setRenderImage] = useState(null);

  useEffect(() => {
    props.setImage(renderImage);
  }, [renderImage]);
  return (
    <div>
      <label className={styles.uploadContainer} htmlFor={props.name}>
        <img src={renderImage}></img>
      </label>
      {/* handle according to design for 1st upload */}
      <input
        name={props.name}
        id={props.name}
        type="file"
        // value={selectedImage1}
        onChange={(e) => {
          setRenderImage(URL.createObjectURL(e.target.files[0]));
          // props.setImage(e.target.files[0]);
        }}
        accept="image/png,image/jpg,image/jpeg"
      />
    </div>
  );
};

export default uploadedImage;
