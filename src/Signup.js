import './Signup.css';
function SignUp() {
    return (
    <div id="SignUpPage" style={{backgroundImage:"url(https://cdn.discordapp.com/attachments/893663423164989440/896574382498000916/image0.png)"}}>
        <div className="sign-up-form">
            <div className="SignUpHeader">
                <h3>Sign Up</h3>
            </div>
            <div className="SignUpInputText">
                <label>Enter an email:</label>
            </div>
            <form>
                <input type="text" name="name" />
            </form>
            <div className="SignUpInputText">
                <label>Your Password:</label>
            </div>
            <form>
                <input type="text" name="password" />
            </form>
            <div className="SignUpReadyButton">
                <button>
                    READY?
                </button>
            </div>
        </div>
    </div>
    );
}

export default SignUp;