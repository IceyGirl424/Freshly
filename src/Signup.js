import './Signup.css';
import logo from "./freshly-logo.png";
function SignUp() {
    return (
    <div id="SignUpPage" style={{backgroundImage:"url(https://cdn.discordapp.com/attachments/893663423164989440/896574382498000916/image0.png)"}}>
        <div className="sign-up-form">
            <a href="/" className="ImgLink"><img src={logo} alt="Freshly Logo"/></a>
            <div className="SignUpHeader">
                <h3 style={{fontSize: "3.5vw"}}>Sign Up</h3>
            </div>
            <form className="RegisterForm">
                <label style={{gridArea: "1 / 1 / span 1 / span 7"}}>Enter an email:</label>
                <input style={{gridArea: "1 / 1 / span 1 / span 12"}} type="text" name="email"/>
                <label style={{gridArea: "3 / 1 / span 1 / span 7"}}>Confirm email:</label>
                <input style={{gridArea: "4 / 1 / span 1 / span 12"}} type="text" name="email"/>
                <label style={{gridArea: "6 / 1 / span 1 / span 7"}}>Enter a password:</label>
                <input style={{gridArea: "7 / 1 / span 1 / span 12"}} type="password" name="password"/>
                <label style={{gridArea: "9 / 1 / span 1 / span 7"}}>Confirm password:</label>
                <input style={{gridArea: "10 / 1 / span 1 / span 12"}} type="password" name="confirm-password"/>
                <button style={{gridArea: "11 / 5 / span 4 / span 4"}}type="submit">READY?</button>
            </form>
        </div>
    </div>
    );
}

export default SignUp;