import './GenreView.css'
import Genre from '../components/Genre'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function GenreView() {
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState([]);
    const params = useParams();
    let page = 1;

    useEffect(() => {
        (async function getMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${params.genre_id}&page=${page}`
            );
            setMovies(response.data.results);
        })();
        (async function getGenre() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setGenre(response.data.genres);
        })();
    }, []);
    console.log(genre);
    const ans = genre.find((id) => id == params.genre_id);
    console.log(ans);

    // fix the genre title fetching

    return (
        <div className="genre-movie-container">
            <h1 className="genre-title"> Header </h1>
                <div className="movies">
                    {movies.slice(0, 21).map((movie, index) => (
                        <div className="movie" key={index}>
                            <img
                                className="movie-poster"
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <span className="movie-title">{movie.original_title}</span>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default GenreView