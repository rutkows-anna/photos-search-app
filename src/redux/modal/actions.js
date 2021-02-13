import {
  SET_PHOTO,
  SHOW_MODAL,
  HIDE_MODAL,
} from "./actionTypes";
import request from "../../helpers/request";

export const setPhoto = (photo) => ({
    type: SET_PHOTO,
    payload: photo,
  });
  export const showModal = (photoId) => ({
    type: SHOW_MODAL,
    payload: photoId,
  });
  export const hideModal = () => ({
    type: HIDE_MODAL,
  });

  export const fetchPhoto = (photoId) => (dispatch) => {
    console.log(photoId)
    request
      .get(`/photos/${photoId}`
      )
      .then(function (response) {
        dispatch(setPhoto(response.data));
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };