import * as actions from "./actionTypes";

const initialState = {
  photo: {},
  loading: false,
  error: false,
  show: false,
  photoId: "",
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PHOTO:
      return {
        ...state,
        loading: false,
        photo: action.payload,
      };
    case actions.SET_PHOTO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.SET_PHOTO_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actions.SHOW_MODAL:
      return {
        ...state,
        show: true,
        photoId: action.payload,
      };
    case actions.HIDE_MODAL:
      return {
        ...state,
        show: false,
        photoId: "",
        photo: {},
      };
    default:
      return state;
  }
};

export default modalReducer;
