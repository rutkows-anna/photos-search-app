import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import { fetchPhotos } from "../../redux/search/actions";
import { showModal } from "../../redux/modal/actions";

const ResultsPage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.search.photos);

  useEffect(() => {
    dispatch(fetchPhotos(query));
  }, [dispatch]);

  return (
    <div>
      <h1>Results Page {query}</h1>
      {photos.length > 0 && photos.map((photo) => {
        return (
          <div key={photo.id} onClick={() => dispatch(showModal(photo.id))}>
            <img src={photo.urls.thumb} alt={photo.alt_description} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultsPage;
