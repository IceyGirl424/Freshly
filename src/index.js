import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from "./Signup";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
    // <React.StrictMode>
    //<App />
  // </React.StrictMode>,
    <Router>
        <Switch>
            <Route path="/signup">
                <SignUp/>
            </Route>
            <Route path="/">
                <App/>
            </Route>
        </Switch>
    </Router>,
  document.getElementById('root')
);

//var element = React.createElement('h1', { className: 'greeting' }, 'Hiii!');
//ReactDOM.render(element, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
