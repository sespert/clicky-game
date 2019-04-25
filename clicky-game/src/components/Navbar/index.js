import React from 'react';
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Clicky Game</a>
                <a className="navbar-brand" href="/">{props.message}</a>
                <a className="navbar-brand" href="/">Your Score is {props.score} | Top Score {props.topScore}</a>
        </nav>

    );
}

export default Navbar;