import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Hero.css';

function Hero() {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
      );
      setMovie(response.data.results[0]);
    })();
  }, []);

  function loadMovie(id) {
    navigate(`/movies/details/${id}`);
  }

  return (
    <div className="featured-content">
      <div className="featured-container">
        <h1 className="featured-title">{movie.original_title}</h1>
        <p className="featured-desc">{movie.overview}</p>
        <button className="featured-button watch" onClick={() => {loadMovie(movie.id)}}>WATCH</button>
        <button className="featured-button rent">RENT</button>
      </div>

      <div className="poster-container">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-image" />
      </div>
    </div>
  )
}

export default Hero