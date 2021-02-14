import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "../../redux/search/actions";
import { showModal } from "../../redux/modal/actions";

const ResultsList = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.search.loading);
  const photos = useSelector((state) => state.search.photos);

  useEffect(() => {
    dispatch(fetchPhotos(query));
  }, [dispatch, query]);

  return (
    <>
      <div className="results">
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
      </div>
    </>
  );
};

export default ResultsList;
