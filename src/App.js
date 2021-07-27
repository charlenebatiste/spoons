
import './App.css';

import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

import Home from './components/Home.jsx'
import Game from './components/Game.jsx'

function App() {
    return (
        <div className="App">

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/game">
                    <Game />
                </Route>
            </Switch>
        </div>

    );
}

export default App;
