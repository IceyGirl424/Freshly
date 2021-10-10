import React from "react";
import   './App.css';
import logo from './freshly-logo.png';


function App() {
  return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>

    <div id ="App" style={{backgroundImage:"url(https://cdn.discordapp.com/attachments/893663423164989440/896486493927907328/sunset.png)"}}>
        <div className="HomeBox">
            <a href="/" className="ImgLink"><img src={logo} alt="Freshly Logo"/></a>
            <div className="Head">
                <h3>Welcome to Freshly</h3>
            </div>
            <div className="SecondHead">
                <h3>We strive to ensure that everyone has a <br></br> well-balanced, natural diet with just the <br></br>ingredients at hand.</h3>
            </div>
            <div className="HomeLoginButton">
                <button>LOGIN</button>
            </div>
            <div className="HomeSignUpButton">
                <a href="/signup">
                    <button>SIGN UP</button>
                </a>
            </div>
        </div>
    </div>
  );
}

export default App; 
