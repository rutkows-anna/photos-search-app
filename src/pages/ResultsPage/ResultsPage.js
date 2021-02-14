import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import Modal from "../../components/Modal/Modal";
import ResultsList from "../../components/ResultsList/ResultsList";
import { useSelector } from "react-redux";

const ResultsPage = () => {
  const { query } = useParams();
  const loading = useSelector((state) => state.search.loading);
  const error = useSelector((state) => state.search.error);
  const show = useSelector((state) => state.modal.show);

  return (
    <>
      {show && <Modal />}
      <div className="results-page-wrapper">
        <SearchBar />
        <h1 className="results-page-wrapper__title">{query}</h1>
        <Loader loading={loading} />
        <ResultsList />
        {error && <Error />}
      </div>
    </>
  );
};

export default ResultsPage;
