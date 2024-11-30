import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Genre.css'

function Genre() {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        (async function getGenres() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setGenres(response.data.genres);
        })();
    }, []);

    return (
        <div>
            <ol>
                {genres.slice(0, 20).map((genre, index) => (
                    <ul>
                        {genre.name}
                    </ul>
                ))}
            </ol>
        </div>
    )

}

export default Genre