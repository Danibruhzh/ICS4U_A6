import './LoginView.css'

function LoginView() {
    return (
        <div className='login-container'>
            <img src='./images/movie feature.png' alt="Movie background" className="background" />
                <div>
                    <form action="/">
                        <button className="home" id="home-button" type="submit">Home</button>
                    </form>
                </div>

                <div>
                    <h1 className="logo">
                        Freakflix
                    </h1>

                </div>


                <div className="island">
                    <h2>SIGN IN</h2>
                    <form action="#">
                        <div className="field">
                            <input type="text" required />
                                <label>Email or phone number</label>
                        </div>
                        <div className="field">
                            <input type="password" required />
                                <label>Password</label>
                        </div>
                        <button type="submit">Sign In</button>
                        <div className="help">
                            <div className="remember">
                                <input type="checkbox" id="remember" />
                                    <label for="remember">Remember me</label>
                            </div>
                            <a href="#">Need help?</a>
                        </div>
                    </form>
                    <p>New to Freakflix? <a href="#">Create account</a></p>
                </div>
        </div>
    )
}

export default LoginView