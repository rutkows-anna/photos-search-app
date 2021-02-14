import * as actions from "./actionTypes";

const initialState = {
  query: "",
  suggestions: [],
  photos: [],
  loading: false,
  error: false,
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
        loading: false,
        photos: action.payload,
      };
    case actions.SET_PHOTOS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.SET_PHOTOS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actions.SET_CLEAR:
      return {
        ...state,
        query: "",
        suggestions: [],
      };
    default:
      return state;
  }
};

export default searchReducer;
