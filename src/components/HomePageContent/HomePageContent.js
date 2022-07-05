import React, { useEffect, useState } from 'react'
import "./HomePageContent.css";

import Row from "./Row/Row";
function HomePageContent() {

    // apiKey = "0477f5f21bb6f8f9d6406faeb32c0ef9"


    // img link  ="https://image.tmdb.org/t/p/original
    const [topRatedMovies, setTopRatedMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0477f5f21bb6f8f9d6406faeb32c0ef9&language=en-US&page=1")
        .then((res) => res.json())
        .then((data) => setTopRatedMovies(data.results))
        .catch((error) => console.log(error))
    }, []);

  return (
    <div className="homepagecontent_container">
      <Row
        rowTitle="Top Rated Movies"
        moviesArray = {topRatedMovies}
        posterPath = {true} 
      />

    </div>
    
    
    
    
    
    
    
    
    
    
    
    /*
    <div>
      <div className="movies_row_container">
        {topRatedMovies.map((value, key) => (
            <div className="movies_row">
              <img 
                src={`https://image.tmdb.org/t/p/original${value.poster_path}`}

              />
            </div>
        ))}
      </div>
    </div>*/
  );
}

export default HomePageContent;