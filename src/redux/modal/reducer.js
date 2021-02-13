import * as actions from "./actionTypes";

const initialState = {
  photo: {},
  show: false,
  photoId: "",
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PHOTO:
      return {
        ...state,
        photo: action.payload,
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
