import { useEffect } from "react";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhoto, hideModal } from "../../redux/modal/actions";
import { AiOutlineClose } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Modal = () => {
  const dispatch = useDispatch();
  const photoId = useSelector((state) => state.modal.photoId);
  const photo = useSelector((state) => state.modal.photo);
  const loading = useSelector((state) => state.modal.loading);
  const error = useSelector((state) => state.modal.error);

  useEffect(() => {
    dispatch(fetchPhoto(photoId));
  }, [dispatch, photoId]);

  return (
    <div className="modal">
      <div className="modal-container">
        <button
          className="modal-container__button"
          onClick={() => dispatch(hideModal())}
        >
          <AiOutlineClose />
        </button>
        {<Loader loading={loading} />}
        {Object.keys(photo).length > 0 && !loading && (
          <div className="modal-content">
            <div className="author-info">
              {" "}
              <img
                src={photo.user.profile_image.small}
                alt={photo.user.name}
                className="author-info__photo"
              />
              <p className="author-info__name"> {photo.user.name}</p>{" "}
            </div>
            <img
              src={photo.urls.regular}
              alt={photo.alt_description}
              className="modal-content__photo"
            />
            <p className="modal-content__location">
              {" "}
              {photo.location.title && <MdLocationOn />}
              {photo.location.title}
            </p>
            {error && <Error />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
