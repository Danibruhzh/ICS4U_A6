import './SettingsView.css'
import Background from '../images/movie feature.png'
import { useStoreContext } from '../context'
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SettingsView() {
    const { genres, setGenres, name, setName, lname, setLname, email, setLogged } = useStoreContext();
    const [genresAll, setGenresAll] = useState([]);
    const firstName = useRef('');
    const lastName = useRef('');
    const [valid, setValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async function getGenres() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setGenresAll(response.data.genres.filter(genre => genre.name !== "Documentary" && genre.name !== "Drama" && genre.name !== "Romance" && genre.name !== "TV Movie"));
            setGenreMap(genres);
            console.log(genres);
        })();
    }, []);

    function changeGenres(event) {
        event.preventDefault();
        if (genres.length >= 10) {
            let fullList = genresAll;
            setGenres(fullList.filter((item) => genres.includes(item.id)));
            setName(firstName.current.value.trim());
            setLname(lastName.current.value.trim());
            navigate("/");
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

    const updateForm = () => {
        setValid((!firstName.current.value.trim() == '' && !lastName.current.value.trim() == ''));
    }

    return (
        <div className='register-container'>
            <img src={Background} alt="Movie background" className="background" />
            <div>
                <form>
                    <button className="home" id="home-button" onClick={() => navigate('/')}>Home</button>
                </form>
            </div>
            <div>
                <h1 className="title">
                    Freakflix
                </h1>
            </div>
            <div className="island">
                <h2>Settings</h2>
                <div className="current-field">
                    <label>Current First Name:</label>
                    <p>{name}</p>
                </div>
                <div className="current-field">
                    <label>Current Last Name:</label>
                    <p>{lname}</p>
                </div>
                <div className="current-field">
                    <label>Current Email:</label>
                    <p>{email}</p>
                </div>
                <form>
                    <div className="field">
                        <input type="text" ref={firstName} onChange={updateForm} required />
                        <label>Update First Name</label>
                    </div>
                    <div className="field">
                        <input type="text" ref={lastName} onChange={updateForm} required />
                        <label>Update Last Name</label>
                    </div>
                    <button onClick={changeGenres} disabled={!valid} className={!valid ? 'disabled-button' : ''}>Update Settings</button>
                </form>
                <a className='logout2' onClick={() => { setLogged(false); setName("Guest"); navigate('/register') }}>Logout</a>
                <div className="genre-selector">
                    <h3 className='selector-title'>Update your prefered genres</h3>
                    {genresAll.map((genre) => (
                        <button key={genre.id} className={`selection ${genres.some(check => check.id == genre.id) ? 'selected' : ''}`} onClick={() => {
                            select(genre);
                        }}>{genre.name}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SettingsView