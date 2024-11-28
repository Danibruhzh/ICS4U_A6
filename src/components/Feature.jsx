import { useState, useEffect } from "react";
import axios from "axios";
import './Feature.css'

function Feature() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async function getMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setMovies(response.data.results);
        })();
    }, []);

    console.log(movies);
    
    return (
        <div className="movie-list-container">
            <h1 className="movie-list-title"> Header </h1>
            <div className="movie-list-wrapper">
                <div className="movie-list">
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src="" alt="" />
                        <span className="movie-list-item-title">{movies[1].original_title}</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src="" alt="" />
                        <span className="movie-list-item-title">{movies[2].original_title}</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src="" alt="" />
                        <span className="movie-list-item-title">{movies[3].original_title}</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src="" alt="" />
                        <span className="movie-list-item-title">{movies[4].original_title}</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src="" alt="" />
                        <span className="movie-list-item-title">{movies[5].original_title}</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src="" alt="" />
                        <span className="movie-list-item-title">{movies[6].original_title}</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src="" alt="" />
                        <span className="movie-list-item-title">{movies[7].original_title}</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                    <div className="movie-list-item">
                        <img className="movie-list-item-image" src='' alt="" />
                        <span className="movie-list-item-title">{movies[8].original_title}</span>
                        <p className="movie-list-item-desc">Description</p>
                        <button className="movie-list-item-button watch">Watch</button>
                        <button className="movie-list-item-button rent">Rent</button>
                    </div>
                </div>

                <i className="fa-solid fa-arrow-right arrow"></i>

            </div>

        </div>
    )
}


export default Feature