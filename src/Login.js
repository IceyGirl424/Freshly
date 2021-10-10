import './Login.css';
import logo from './freshly-logo.png';

function Login() {
    return (

    <div id="LoginPage" style={{backgroundImage:"url(https://cdn.discordapp.com/attachments/893663423164989440/896574382498000916/image0.png)"}}>
        <div className="login-form">
        <a href="/" className="ImgLink"><img src={logo} alt="Freshly Logo"/></a>
            <div className="LoginHeader">
                <h3>Login</h3>
            </div>
            <div className="LoginInputText">
                <label>Enter an email:</label>
            </div>
            <form>
                <input type="text" name="name" />
            </form>
            <div className="LoginInputText">
                <label>Your Password:</label>
            </div>
            <form>
                <input type="text" name="password" />
            </form>
            <div className="LoginReadyButton">
                <button>
                    READY?
                </button>
            </div>
        </div>
    </div>

        

    );
}

export default Login;