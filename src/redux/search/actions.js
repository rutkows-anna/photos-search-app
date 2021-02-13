import axios from "axios";
import {
  SET_QUERY,
  SET_SUGGESTIONS,
  SET_PHOTOS,
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

export const fetchSuggestions = (query) => (dispatch) => {
  axios
    .get(`/nautocomplete/${query}`)
    .then(function (response) {
      dispatch(setSuggestions(response.data.autocomplete));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const fetchPhotos = (query) => (dispatch) => {
  request
    .get(
      `/search/photos?query=${query}`
    )
    .then(function (response) {
      dispatch(setPhotos(response.data.results));
      console.log(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    });
};
