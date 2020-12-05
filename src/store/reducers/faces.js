import { GENERATE_FACES } from "./../actions/faces";

const initialState = {
  generatedFaces: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_FACES:
      return {
        ...state,
        generatedFaces: action.faces,
      };
  }

  return initialState;
};
