export const GENERATE_FACES = "GENERATE_FACES";
export const COMPARE_FACES = "COMPARE_FACES";
export const EXTRACT_FACE_DETAILS = "EXTRACT_FACE_DETAILS";

export const generateFaces = (facialInputs) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch("", {
        method: "POST",
        body: JSON.stringify(facialInputs),
      });

      if (response.staus != 200) {
        throw new Error("Server Error");
      }

      const resData = response.json();

      // extract the faces array from resData;
      // const faces = ;
      dispatch({
        type: GENERATE_FACES,
        faces,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const compareFaces = (file1, file2) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch("", {
        method: "POST",
        body: JSON.stringify({
          file1,
          file2,
        }),
      });

      if (response.staus != 200) {
        throw new Error("Server Error");
      }

      const resData = response.json();

      // extract the info from resData;
      // const details = ;
      dispatch({
        type: COMPARE_FACES,
        comparedDetails: details,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const extractFacialFeatures = (file) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch("", {
        method: "POST",
        body: JSON.stringify({
          file,
        }),
      });

      if (response.staus != 200) {
        throw new Error("Server Error");
      }

      const resData = response.json();

      // extract the info from resData;
      // const details = ;
      dispatch({
        type: EXTRACT_FACE_DETAILS,
        extractedFacialDetails: details,
      });
    } catch (error) {
      throw error;
    }
  };
};
