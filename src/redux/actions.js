import axios from "axios";
import { SET_QUERY, SET_SUGGESTIONS, SET_PHOTOS } from "./actionTypes";

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
  axios
    .get(
      `https://api.unsplash.com/search/photos?page=1&client_id=ubqRtUaT97rSSpHD6ZbHsX96g1STBeZlKA_qMF4wn-c&query=${query}`
    )
    .then(function (response) {
      dispatch(setPhotos(response.data.results));
      console.log(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    });
};
