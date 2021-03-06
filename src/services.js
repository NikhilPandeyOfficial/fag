import * as tf from "@tensorflow/tfjs";
import { useState } from "react";

export const ageMapping = {
    0: "0-2yrs",
    1: "4-6yrs",
    2: "8-12yrs",
    3: "15-20yrs",
    4: "25-32yrs",
    5: "38-43yrs",
    6: "48-53yrs",
    7: "60-100yrs",
  },
  genderMapping = { 0: "Male", 1: "Female" },
  raceMapping = {
    0: "White",
    1: "Black",
    2: "Asian",
    3: "Indian",
    4: "Others",
  },
  eyeColorMapping = { 0: "Blue", 1: "Brown", 2: "Green" },
  hairColorMapping = { 0: "Black", 1: "Blonde", 2: "Brown", 3: "Gray" },
  beardMapping = { 0: "Present", 1: "Absent" };

const helper = async (modelLink, image, width, height, mapping) => {
  try {
    const model = await tf.loadLayersModel(modelLink);
    const im = new Image();
    im.src = image;
    let file = await tf.browser.fromPixels(im);
    file = await tf.image.resizeBilinear(file, [width, height]);
    file = await file.reshape([1, height, width, 3]);
    const pred = await model.predict(file).array();
    const ind = await pred[0].indexOf(1);
    return mapping[ind];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const extractFeatures = async (image) => {
  try {
    const ageModel =
      "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/models-for-extract-features/age/model.json";
    const genderModel =
      "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/models-for-extract-features/gender/model.json";
    const raceModel =
      "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/models-for-extract-features/race/model.json";
    const eyeColorModel =
      "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/models-for-extract-features/eye_color/model.json";
    const hairColorModel =
      "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/models-for-extract-features/hair_color/model.json";
    const beardModel =
      "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/models-for-extract-features/beard/model.json";

    const ageGenderRacesize = 200,
      eyeColorsize = 300,
      beardHairColorWidth = 178,
      beardHairColorHeight = 218;

    // predicted values
    const predictedFeatures = {};

    predictedFeatures["age"] = await helper(
      ageModel,
      image,
      ageGenderRacesize,
      ageGenderRacesize,
      ageMapping
    );
    predictedFeatures["gender"] = await helper(
      genderModel,
      image,
      ageGenderRacesize,
      ageGenderRacesize,
      genderMapping
    );
    predictedFeatures["race"] = await helper(
      raceModel,
      image,
      ageGenderRacesize,
      ageGenderRacesize,
      raceMapping
    );
    predictedFeatures["eyeColor"] = await helper(
      eyeColorModel,
      image,
      eyeColorsize,
      eyeColorsize,
      eyeColorMapping
    );
    predictedFeatures["hairColor"] = await helper(
      hairColorModel,
      image,
      beardHairColorWidth,
      beardHairColorHeight,
      hairColorMapping
    );
    predictedFeatures["beard"] = await helper(
      beardModel,
      image,
      beardHairColorWidth,
      beardHairColorHeight,
      beardMapping
    );

    return predictedFeatures;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// const getRandomInt = () => {
//   const min = Math.ceil(0);
//   const max = Math.floor(1);
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// };

// const inputArrayMaker = (facialInputs) => {
//   let inputArr = {
//     0: 0,
//     1: getRandomInt(),
//     2: getRandomInt(),
//     3: 0,
//     4: 0,
//     5: 0,
//     6: getRandomInt(),
//     7: getRandomInt(),
//     8: facialInputs["hairColor"] === "Black" ? 1 : 0,
//     9: facialInputs["hairColor"] === "Blonde" ? 1 : 0,
//     10: 0,
//     11: facialInputs["hairColor"] === "Brown" ? 1 : 0,
//     12: getRandomInt(),
//     13: getRandomInt(),
//     14: 0, // same value as of ind 13
//     15: facialInputs["eyeGlasses"] === "EyeGlasses" ? 1 : 0,
//     16: 0, // handle
//     17: facialInputs["hairColor"] === "Gray" ? 1 : 0,
//     18: facialInputs["gender"] === "Male" ? 0 : getRandomInt(),
//     19: getRandomInt(),
//     20: facialInputs["gender"] === "Male" ? 1 : 0,
//     21: getRandomInt(),
//     22: 0, // handle
//     23: getRandomInt(),
//     24:
//       facialInputs["gender"] === "Female" ||
//       facialInputs["facialHair"] === "No-Beard"
//         ? 1
//         : getRandomInt(),
//     25: getRandomInt(),
//     26: 0, // depends on ind 50 & 54
//     27: getRandomInt(),
//     28: 0,
//     29: facialInputs["gender"] === "Male" ? 0 : getRandomInt(),
//     30: getRandomInt(),
//     31: getRandomInt(),
//     32: getRandomInt(),
//     33: 0, // ind 32 & 33 are opposite to each other
//     34: 0,
//     35: 0,
//     36: facialInputs["gender"] === "Male" ? 0 : getRandomInt(),
//     37: 0,
//     38: 0,
//     39: 0, // depends on age
//     40: facialInputs["age"] === "0-2yrs" ? 1 : 0,
//     41: facialInputs["age"] === "4-6yrs" ? 1 : 0,
//     42: facialInputs["age"] === "8-12yrs" ? 1 : 0,
//     43: facialInputs["age"] === "15-20yrs" ? 1 : 0,
//     44: facialInputs["age"] === "25-32yrs" ? 1 : 0,
//     45: facialInputs["age"] === "38-43yrs" ? 1 : 0,
//     46: facialInputs["age"] === "48-53yrs" ? 1 : 0,
//     47: facialInputs["age"] === "60-100yrs" ? 1 : 0,
//     48: facialInputs["gender"] === "Male" ? 0 : 1,
//     49: facialInputs["gender"] === "Male" ? 1 : 0,
//     50: facialInputs["race"] === "Asian" ? 1 : 0,
//     51: facialInputs["race"] === "Black" ? 1 : 0,
//     52: facialInputs["race"] === "Hispanic" ? 1 : 0,
//     53: facialInputs["race"] === "Indian" ? 1 : 0,
//     54: facialInputs["race"] === "White" ? 1 : 0,
//   };

//   inputArr[14] = inputArr[13];
//   inputArr[33] = Number(!inputArr[32]);
//   if (inputArr[24] === 1) {
//     inputArr[16] = 0;
//     inputArr[22] = 0;
//   } else {
//     inputArr[16] = 1;
//     inputArr[22] = 1;
//   }

//   if (
//     inputArr[40] === 1 ||
//     inputArr[41] === 1 ||
//     inputArr[42] === 1 ||
//     inputArr[43] === 1
//   ) {
//     inputArr[39] = 1;
//   } else {
//     inputArr[39] = 0;
//   }

//   if (inputArr[50] === 1 || inputArr[54] === 1) {
//     inputArr[26] = getRandomInt();
//   } else {
//     inputArr[26] = 0;
//   }

//   return Object.values(inputArr);
// };

// will return UintClampArray
export const generateFace = async (inp) => {
  try {
    const model = await tf.loadLayersModel(
      "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/final-decoder-for-face-generation/model.json"
    );

    inp = await tf.tensor1d(inp);
    inp = await tf.expandDims(inp, 0);

    let pred = await model.predict(inp);
    pred = await pred.reshape([150, 150, 3]);
    // pred.print();

    // Handled the range ecxeed error
    pred = await tf.browser.toPixels(
      pred.clipByValue(0, 1).mul(tf.scalar(255)).cast("int32")
    );

    return pred;
  } catch (error) {
    console.log(error);
    throw console.error();
  }
};

// return percentage of matching
export const compareFaces = async (image1, image2) => {
  try {
    const encoder = await tf.loadLayersModel(
      "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/encoder-for-compare-faces/model.json"
    );

    const im1 = new Image(),
      im2 = new Image();
    im1.src = image1;
    im2.src = image2;

    let file1 = await tf.browser.fromPixels(im1);
    file1 = await tf.image.resizeBilinear(file1, [150, 150]);
    file1 = await file1.reshape([1, 150, 150, 3]);

    let file2 = await tf.browser.fromPixels(im2);
    file2 = await tf.image.resizeBilinear(file2, [150, 150]);
    file2 = await file2.reshape([1, 150, 150, 3]);

    const pred1 = await encoder.predict(file1).array();
    const pred2 = await encoder.predict(file2).array();

    const loss = await tf.losses.cosineDistance(pred1, pred2, 0).array();
    // loss.print();
    console.log("loss " + loss);
    const sim = 1 - loss;
    console.log("similarity " + sim);
    return sim * 100;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
