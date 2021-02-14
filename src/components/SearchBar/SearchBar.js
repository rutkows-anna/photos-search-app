import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setQuery,
  fetchSuggestions,
  setClear,
} from "../../redux/search/actions";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const suggestions = useSelector((state) => state.search.suggestions);
  let history = useHistory();

  useEffect(() => {
    if (query.length > 2) {
      dispatch(fetchSuggestions(query));
    }
  }, [dispatch, query]);

  const handleOnChange = (event) => {
    dispatch(setQuery(event.target.value));
  };

  const handleResults = (query) => {
    history.push(`/${query}`);
    dispatch(setClear());
  };
  const handleOnKeypress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleResults(query);
    } else {
      return false;
    }
  };

  return (
    <form className="form">
      <input
        type="text"
        required
        placeholder="Search free high-resolution photos"
        value={query}
        onChange={handleOnChange}
        onKeyPress={handleOnKeypress}
        className="form__input"
      />
      <ul className="list">
        {query.length > 2 &&
          (suggestions.length > 0 ? (
            suggestions.map((item) => {
              return (
                <li
                  key={item.priority}
                  onClick={() => handleResults(item.query)}
                  className="list__item"
                >
                  {item.query}
                </li>
              );
            })
          ) : (
            <li className="list__item">No autocomplete suggestions.</li>
          ))}
      </ul>
    </form>
  );
};

export default SearchBar;
