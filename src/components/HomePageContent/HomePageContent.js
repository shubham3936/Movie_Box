import React, { useEffect, useState } from 'react'
import "./HomePageContent.css";

import Row from "./Row/Row";
function HomePageContent() {

     // API_ENDPOINT = "https://api.themoviedb.org/3" 
    // API_KEY = "82372dfcea1ebf3b69159ee3abff1e56"

    // APIs
    // Top Rated Movies
    // https://api.themoviedb.org/3/movie/top_rated?api_key=82372dfcea1ebf3b69159ee3abff1e56

    // Now Playing
    // https://api.themoviedb.org/3/movie/now_playing?api_key=yourApiKey&language=en-US&page=1


    // `${API_ENDPOINT}/movie/top_rated?api_key=${API_KEY}`
    // img link  ="https://image.tmdb.org/t/p/original
    
    const BASE_URL = "https://api.themoviedb.org/3/movie/";
    const API_KEY = "82372dfcea1ebf3b69159ee3abff1e56";

    const topRatedMoviesApiUrl = `${BASE_URL}top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    const popularMoviesApiUrl = `${BASE_URL}popular?api_key=${API_KEY}&language=en-US&page=1`;
    const nowPlayingMoviesApiUrl = `${BASE_URL}now_playing?api_key=${API_KEY}&language=en-US&p`;

    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  
    function callApi(url,setVariable)
    {
      fetch(url)
        .then((res)=>res.json())
        .then((data => setVariable(data.results)))
        .catch((err)=> console.log(err))
    }

    useEffect(() => {
      callApi(topRatedMoviesApiUrl,setTopRatedMovies);
      callApi(popularMoviesApiUrl,setPopularMovies);
      callApi(topRatedMoviesApiUrl,setNowPlayingMovies);
    }, []);

  return (
    <div className="homepagecontent_container">
      {topRatedMovies.length > 0 && (
        <Row
          rowTitle="Top Rated Movies"
          moviesArray={topRatedMovies}
          posterPath={true}
        />
      )}

      {popularMovies.length > 0 && (
        <Row
          rowTitle="Popular Movies"
          moviesArray={popularMovies}
          posterPath={true}
        />
      )}

      {nowPlayingMovies.length > 0 && (
        <Row
          rowTitle="Now Playing Movies"
          moviesArray={nowPlayingMovies}
          posterPath={true}
        />
      )}

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