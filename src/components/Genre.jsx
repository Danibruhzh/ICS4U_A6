import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Genre.css'
import { useStoreContext } from "../context";

function Genre() {
    const {genres} = useStoreContext();
    const navigate = useNavigate();

    // useEffect(() => {
    //     (async function getGenres() {
    //         const response = await axios.get(
    //             `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}`
    //         );
    //         console.log(genres);
    //     })();
    // }, []);

    function loadGenre(id) {
        navigate(`genre/${id}`);
    }

    function refreshPage() {
        window.location.reload();
    }

    return (
        <div className="genre-container">
            <ol className="genre-list">
                {genres
                    .filter(genre => genre.name !== "Documentary" && genre.name !== "Drama" && genre.name !== "Romance" && genre.name !== "TV Movie")
                    .slice(0, 20)
                    .map((genre) => (
                        <ul key={genre.id} className="genre" onClick={() => { loadGenre(genre.id); refreshPage(); }}>
                            {genre.name}
                        </ul>
                    ))}
            </ol>
        </div>
    )
}

export default Genre