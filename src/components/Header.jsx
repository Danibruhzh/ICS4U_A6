import './Header.css'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    function loadHome(){
        navigate(`/`);
    }

    return (
        <div className="header">
            <div className="header-container">
                <div className="logo-container">
                    <div className="logo">
                        <h1 onClick={() => loadHome()}>Freakflix</h1>
                    </div>
                </div>
                <div className="menu-container">
                    <div className="menu">
                        <form className="menu-list">
                            <a className="menu-list-item active" href='/'>Home</a>
                            <a className="menu-list-item" href="/movies">Movies</a>
                        </form>
                    </div>
                </div>
                <div className="search-bar-container">
                    <div className="search-bar">
                        <form>
                            <input type="search" className="search" placeholder="Search Movies or Shows" />
                        </form>
                    </div>
                </div>

                <div className="sign-in-button-container">
                    <div className="sign-in-button">
                        <form action="/login">
                            <button className="sign-in" type="submit">Sign-in</button>
                        </form>
                    </div>
                </div>
                <div className="register-button-container">
                    <div className="register-button">
                        <form action="/register">
                            <button className="register" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header