import { useEffect, useState } from "react";
import axios from "axios";
import './Hero.css';

function Hero() {
    const [movie, setMovie] = useState([]);


    // `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`


    return (
        <div className="featured-content" >
            <img className="featured-title" src="" alt="Wall-E Title Image" />
            <p>Description</p>
            <button className="featured-button watch">WATCH</button>
            <button className="featured-button rent">RENT</button>
        </div>
    )
}

export default Hero