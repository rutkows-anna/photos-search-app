import SearchBar from "../../components/SearchBar/SearchBar";

const MainPage = () => {
  return (
    <div className="mainpage-wrapper">
      <div className="mainpage-content">
        <h1 className="mainpage-content__title">Unsplash</h1>
        <p className="mainpage-content__text">
          The internet’s source of freely-usable images.
        </p>
        <p className="mainpage-content__text">
          {" "}
          Powered by creators everywhere.
        </p>
        <SearchBar />
      </div>
    </div>
  );
};

export default MainPage;
