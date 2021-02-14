import {
  SET_PHOTO,
  SET_PHOTO_LOADING,
  SET_PHOTO_ERROR,
  SHOW_MODAL,
  HIDE_MODAL,
} from "./actionTypes";
import request from "../../helpers/request";

export const setPhoto = (photo) => ({
  type: SET_PHOTO,
  payload: photo,
});
export const setLoading = () => ({
  type: SET_PHOTO_LOADING,
});
export const setError = () => ({
  type: SET_PHOTO_ERROR,
});
export const showModal = (photoId) => ({
  type: SHOW_MODAL,
  payload: photoId,
});
export const hideModal = () => ({
  type: HIDE_MODAL,
});

export const fetchPhoto = (photoId) => (dispatch) => {
  dispatch(setLoading());
  request
    .get(`/photos/${photoId}`)
    .then((response) => {
      dispatch(setPhoto(response.data));
    })
    .catch((error) => {
      dispatch(setError());
    });
};
