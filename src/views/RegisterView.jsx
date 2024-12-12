import './RegisterView.css'
import Background from '../images/movie feature.png'
import { useStoreContext } from '../context'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function RegisterView() {
    const { genres, setGenres } = useStoreContext();
    const [genreMap, setGenreMap] = useState([]);
    // const [genreSelect, setGenreSelect] = useState([]);
    const genreSelect = useRef([]);

    useEffect(() => {
        (async function getGenres() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setGenres(response.data.genres.filter(genre => genre.name !== "Documentary" && genre.name !== "Drama" && genre.name !== "Romance" && genre.name !== "TV Movie"));
        })();
    }, []);

    // function changeGenres() {
    //     setGenres(genreMap);
    // }

    useEffect(() => {
        genreSelect.current.push(genreMap);
        console.log(genreSelect);
    }, [genreMap]);

    return (
        <div className='register-container'>
            <img src={Background} alt="Movie background" className="background" />
            <div>
                <form action="/">
                    <button className="home" id="home-button" type="submit">Home</button>
                </form>
            </div>

            <div>
                <h1 className="title">
                    Freakflix
                </h1>
            </div>

            <div className="island">
                <h2>CREATE ACCOUNT</h2>
                <form action="#">
                    <div className="field">
                        <input type="text" required />
                        <label>First Name</label>
                    </div>
                    <div className="field">
                        <input type="text" required />
                        <label>Last Name</label>
                    </div>
                    <div className="field">
                        <input type="text" required />
                        <label>Email or phone number</label>
                    </div>
                    <div className="field">
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div className="field">
                        <input type="password" required />
                        <label>Re-enter Password</label>
                    </div>
                    <button onClick={() => {changeGenres()}}>Create Account</button>
                    <div className="help">
                        <div className="terms">
                            <input type="checkbox" id="terms" />
                            <label for="terms"> Agree to <a href="#">Terms & Conditions</a></label>
                        </div>
                        <a href="#">Need help?</a>
                    </div>
                </form>
                <p>Already have an account? <a href="/login">Sign In</a></p>
                <div className="genre-selector">
                    {genres.map((genre) =>(
                        <button key={genre.id} className='selection' onClick={() => {
                            setGenreMap([genre.id, genre.name]);
                        }}>{genre.name}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RegisterView