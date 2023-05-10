import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieSearchApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&S=${searchTerm}`
        );
        setSearchResults(response.data.Search);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchResults([]);
      }
    };

    if (searchTerm.trim()) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.elements.searchInput.value.trim());
  };
  return (
    <div className="p-3">
      <h1 style={{ color: "white" }}>Movie Search</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search movies..."
          id="searchInput"
          autoComplete="off"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </form>
      <div>
        {searchResults ? (
          <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
            {searchResults.map((movie, i) => (
              <div
                className="card"
                style={{
                  width: " 14rem",
                  backgroundColor: "transparent",
                  color: "white",
                }}
                key={i}
              >
                <img
                  src={movie.Poster}
                  className="card-img-top"
                  alt={"Image Not Availale for " + movie.Title}
                  style={{ height: "23rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{movie.Title}</h5>
                  <p className="card-text text-truncate">{movie.Year}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2 style={{ color: "white" }}>No results found.</h2>
        )}
      </div>
    </div>
  );
};

export default MovieSearchApp;
