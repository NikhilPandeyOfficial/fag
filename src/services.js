import * as tf from "@tensorflow/tfjs";

export const ageMapping = {
    0: "1-2yrs",
    1: "1-9yrs",
    2: "10-20yrs",
    3: "21-27yrs",
    4: "28-45yrs",
    5: "45-65yrs",
    6: "65yrs and above",
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

// will return UintClampArray
export const generateFace = async (facialInputs) => {
  const model = await tf.loadLayersModel(
    "https://nikcnnmodels.s3.ap-south-1.amazonaws.com/model.json"
  );

  let inp = await tf.tensor1d(facialInputs);
  inp = await tf.expandDims(inp, 0);

  let pred = await model.predict(inp);
  pred = await pred.reshape([200, 200, 3]);
  pred = await tf.browser.toPixels(pred);

  return pred;
};
