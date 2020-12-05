export const GENERATE_FACES = "GENERATE_FACES";

export const generateFaces = () => {
  return async (dispatch, getState) => {
    try {
      const faces = ["cat"];

      dispatch({
        type: GENERATE_FACES,
        faces,
      });
    } catch (error) {}
  };
};
