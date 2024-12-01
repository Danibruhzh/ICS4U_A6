import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Feature.css'

function Feature() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        (async function getMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setMovies(response.data.results);
        })();
    }, []);

    function loadMovie(id) {
        navigate(`/movies/details/${id}`);
      }

    return (
        <div className="movie-list-container">
            <h1 className="movie-list-title"> Header </h1>
            <div className="movie-list-wrapper">
                <div className="movie-list">
                    {movies.slice(1, 9).map((movie, index) => (
                        <div className="movie-list-item" key={index}>
                            <img
                                className="movie-list-item-image"
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <span className="movie-list-item-title">{movie.original_title}</span>
                            <p className="movie-list-item-desc">{movie.overview || "Description"}</p>
                            <button className="movie-list-item-button" onClick={() => {loadMovie(movie.id)}}>Watch</button>
                            <button className="movie-list-item-button rent">Rent</button>
                        </div>
                    ))}
                </div>
                <i className="fa-solid fa-arrow-right arrow"></i>
            </div>
        </div>
    );
}


export default Feature