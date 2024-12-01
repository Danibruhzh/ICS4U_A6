import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <div className="logo-container">
                    <div className="logo">
                        <h1>Freakflix</h1>
                    </div>
                </div>
                <div className="menu-container">
                    <div className="menu">
                        <ul className="menu-list">
                            <li className="menu-list-item active">Home</li>
                            <li className="menu-list-item">Movies</li>
                            <li className="menu-list-item">Shows</li>
                            <li className="menu-list-item">Trending</li>
                        </ul>
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
            </div>
        </div>
    )
}

export default Header