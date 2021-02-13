import axios from "axios";
import {
  SET_PHOTO,
  SHOW_MODAL,
  HIDE_MODAL,
} from "./actionTypes";

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
    axios
      .get(
        `https://api.unsplash.com/photos/${photoId}?client_id=ubqRtUaT97rSSpHD6ZbHsX96g1STBeZlKA_qMF4wn-c`
      )
      .then(function (response) {
        dispatch(setPhoto(response.data));
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };