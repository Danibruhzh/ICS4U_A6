import './RegisterView.css'
import Background from '../images/movie feature.png'

function RegisterView() {
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
                    <button type="submit">Create Account</button>
                    <div className="help">
                        <div className="terms">
                            <input type="checkbox" id="terms" />
                            <label for="terms">Agree to <a href="#">Terms & Conditions</a></label>
                        </div>
                        <a href="#">Need help?</a>
                    </div>
                </form>
                <p>Already have an account? <a href="/login">Sign In</a></p>
            </div>
        </div>
    )
}

export default RegisterView