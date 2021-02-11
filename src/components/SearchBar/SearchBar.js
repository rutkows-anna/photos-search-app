import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery, fetchSuggestions } from "../../redux/actions";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);
  const suggestions = useSelector((state) => state.suggestions);

  useEffect(() => {
    if (query.length > 2) {
      dispatch(fetchSuggestions(query));
    }
  }, [dispatch, query]);

  const handleChange = (event) => {
    dispatch(setQuery(event.target.value));
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      <div>
        {query.length > 2 &&
          (suggestions.length > 0 ? (
            suggestions.map((item) => {
              return (
                <Link key={item.priority} to={`/${item.query}`}>
                  {item.query}
                </Link>
              );
            })
          ) : (
            <h1>No autocomplete sugest.</h1>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
