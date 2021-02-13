import * as actions from "./actionTypes";

const initialState = {
  query: "",
  suggestions: [],
  photos: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case actions.SET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload,
      };
    case actions.SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
