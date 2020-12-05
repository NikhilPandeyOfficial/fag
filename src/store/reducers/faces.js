import {
  GENERATE_FACES,
  COMPARE_FACES,
  EXTRACT_FACE_DETAILS,
} from "./../actions/faces";

const initialState = {
  generatedFaces: [],
  comparedDetails: {},
  extractedFacialDetails: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_FACES:
      return {
        ...state,
        generatedFaces: action.faces,
      };

    case COMPARE_FACES:
      return {
        ...state,
        comparedDetails: action.comparedDetails,
      };

    case EXTRACT_FACE_DETAILS:
      return {
        ...state,
        extractedFacialDetails: action.extractedFacialDetails,
      };
  }

  return initialState;
};
