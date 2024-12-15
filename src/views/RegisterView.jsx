import './RegisterView.css'
import Background from '../images/movie feature.png'
import { useStoreContext } from '../context'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function RegisterView() {
    const { genres, setGenres } = useStoreContext();
    const [genresAll, setGenresAll] = useState([]);
    const [genreMap, setGenreMap] = useState([]);
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();

    useEffect(() => {
        (async function getGenres() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setGenres(response.data.genres.filter(genre => genre.name !== "Documentary" && genre.name !== "Drama" && genre.name !== "Romance" && genre.name !== "TV Movie"));
            setGenresAll(response.data.genres.filter(genre => genre.name !== "Documentary" && genre.name !== "Drama" && genre.name !== "Romance" && genre.name !== "TV Movie"));
        })();
    }, []);

    function changeGenres() {
        if (genreMap.length >= 10) {
            let fullList = genresAll;
            setGenres(fullList.filter((item) => genreMap.includes(item.id)));
        } else {
            alert("Please select at least 10 genres!");
        }
    }

    const select = (genre) => {
        setGenreMap((prev) => {
            if (prev.includes(genre.id)) {
                return prev.filter((id) => id !== genre.id);
            } else {
                return [...prev, genre.id];
            }
        })
    };

    const isFormValid = () => {
        const firstName2 = firstName.current ? firstName.current.value.trim() : '';
        const lastName2 = lastName.current ? lastName.current.value.trim() : '';
        const email2 = email.current ? email.current.value.trim() : '';
        const password2 = password.current ? password.current.value.trim() : '';
        const confirmPassword2 = confirmPassword.current ? confirmPassword.current.value.trim() : '';
        return firstName2 && lastName2 && email2 && password2 && confirmPassword2 && password2 === confirmPassword2;
    };
    

    return (
        <div className='register-container'>
            <img src={Background} alt="Movie background" className="background" />
            <div>
                <form>
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
                <form onSubmit="/movies">
                    <div className="field">
                        <input type="text" ref={firstName} required />
                        <label>First Name</label>
                    </div>
                    <div className="field">
                        <input type="text" ref={lastName} required />
                        <label>Last Name</label>
                    </div>
                    <div className="field">
                        <input type="text" ref={email} required />
                        <label>Email or phone number</label>
                    </div>
                    <div className="field">
                        <input type="password" ref={password} required />
                        <label>Password</label>
                    </div>
                    <div className="field">
                        <input type="password" ref={confirmPassword} required />
                        <label>Re-enter Password</label>
                    </div>
                    <button onClick={changeGenres} disabled={!isFormValid()} className={!isFormValid() ? 'disabled-button' : ''}>Create Account</button>
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
                    <h3 className='selector-title'>Choose your prefered genres</h3>
                    {genresAll.map((genre) => (
                        <button key={genre.id} className={`selection ${genreMap.includes(genre.id) ? 'selected' : ''}`} onClick={() => {
                            select(genre);
                        }}>{genre.name}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RegisterView