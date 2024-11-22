import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Hero.css';

function Hero() {
    const [movie, setMovie] = useState([]);


    // `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`

    useEffect(() => {
        (async function getMovies() {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
          );
          setMovie(response.data.results);
        })();
      }, []);


    return (
        <div className="featured-content" >
            {/* //FIX THIS!!// */}
            <h1 className="featured-title">{movie[0].original_title}</h1>
            <p className="featured-desc">{movie[0].overview}</p>
            <img
            src={`https://image.tmdb.org/t/p/w500${movie[0].poster_path}`}
            alt={movie[0].title}
            className="movie-poster"
          />
            <button className="featured-button watch">WATCH</button>
            <button className="featured-button rent">RENT</button>
        </div>
    )
}

export default Hero