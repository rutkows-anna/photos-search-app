import axios from "axios";
import {
  SET_QUERY,
  SET_SUGGESTIONS,
  SET_PHOTOS,
  SET_PHOTOS_LOADING,
  SET_PHOTOS_ERROR,
  SET_CLEAR,
} from "./actionTypes";
import request from "../../helpers/request";

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});
export const setSuggestions = (suggestions) => ({
  type: SET_SUGGESTIONS,
  payload: suggestions,
});
export const setPhotos = (photos) => ({
  type: SET_PHOTOS,
  payload: photos,
});
export const setLoading = () => ({
  type: SET_PHOTOS_LOADING,
});
export const setClear = () => ({
  type: SET_CLEAR,
});
export const setError = () => ({
  type: SET_PHOTOS_ERROR,
});
export const fetchSuggestions = (query) => (dispatch) => {
  axios
    .get(`/nautocomplete/${query}`)
    .then((response) => {
      dispatch(setSuggestions(response.data.autocomplete));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchPhotos = (query) => (dispatch) => {
  dispatch(setLoading());
  request
    .get(`/search/photos?query=${query}`)
    .then((response) => {
      dispatch(setPhotos(response.data.results));
    })
    .catch((error) => {
      dispatch(setError());
    });
};
