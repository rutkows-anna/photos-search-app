import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import Modal from "../../components/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "../../redux/search/actions";
import { showModal } from "../../redux/modal/actions";

const ResultsPage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.search.photos);
  const loading = useSelector((state) => state.search.loading);
  const error = useSelector((state) => state.search.error);
  const show = useSelector((state) => state.modal.show);
  useEffect(() => {
    dispatch(fetchPhotos(query));
  }, [dispatch, query]);

  return (
    <>
    {show && <Modal /> }
    <div className="results-page-wrapper">
      <SearchBar />
      <h1 className="results-page-wrapper__title">{query}</h1>
      <div className="results">
        <Loader loading={loading} />
        {photos.length > 0 &&
          !loading &&
          photos.map((photo) => {
            return (
              <div
                key={photo.id}
                onClick={() => dispatch(showModal(photo.id))}
                className="results__wrapper"
              >
                <img
                  src={photo.urls.regular}
                  alt={photo.alt_description}
                  className="results__photo"
                />
              </div>
            );
          })}
        {error && <Error />}
      </div>
    </div>
    </>
  );
};

export default ResultsPage;
