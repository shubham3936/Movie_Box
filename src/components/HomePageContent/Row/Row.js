import React from "react";
import "./Row.css";

function Row({ rowTitle, moviesArray, posterPath }) {
  return (
    <div className="row_container">
      <p className="row_container_title">{rowTitle}</p>
      <div className="movies_row_container">
        {moviesArray.map((value, key) => (
          <div className="movies_row">
            <img
              src={
                posterPath
                  ? `https://image.tmdb.org/t/p/original${value.poster_path}`
                  : `https://image.tmdb.org/t/p/original${value.backdrop_path}`
              }
              alt={`${rowTitle}Img`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;