import { useEffect, useReducer } from "react";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhoto, hideModal } from "../../redux/modal/actions";

const Modal = () => {

  const dispatch = useDispatch();
  const photoId = useSelector((state) => state.modal.photoId);
  const photo = useSelector((state) => state.modal.photo);
  const show = useSelector((state) => state.modal.show);

  useEffect(() => {
    dispatch(fetchPhoto(photoId));
  }, [dispatch, photoId]);
  /*
  if (!show) {
    return null;
  } */

  return (
    <div className="modal">
      <div className="modal__container">
        <button
          className="modal__button"
          onClick={() => dispatch(hideModal())}
        >
          X
        </button>
        {/* <Loader loading={loading} /> */}
        {Object.keys(photo).length > 0 && 
          
     
            <p>{photo.location.title}</p> 
         
        }

        {/* error && <Error /> */}
        <h1 className="modal__title">{}</h1>
      </div>
    </div>
  );
};

export default Modal;
