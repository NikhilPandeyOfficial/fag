import React, { useState, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";

import styles from "./Canvas.module.css";

const Canvas = ({ prediction }) => {
  // props.matrix something like this [1, 1, 1, 1, 1, 1]
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const imd = new ImageData(prediction, 150);
    context.putImageData(imd, 0, 0, 0, 0, 200, 200);
  }, []);

  return (
    <canvas
      className={styles.canvas}
      ref={canvasRef}
      height={"150px"}
      width={"150px"}
    />
  );
};

export default Canvas;
