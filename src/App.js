import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Play from "./components/Play";
import Footer from "./components/Footer";
import './css/App.scss';

export default function App() {

    const [myPick, setMyPick] = useState("");
    const [housePick, setHousePick] = useState("");
    const [gameScore, setGameScore] = useState(0);

    function newHousePick() {
        const choices = ["rock", "paper", "scissors"];
        const randomChoice = choices[Math.floor((Math.random()*3))];
        setHousePick(randomChoice);
    }

    useEffect(() => {
        newHousePick();
    },[setMyPick]);

    return (
        <div className="wrapper">
            <Router>
                <Header score={gameScore}/>
                <Route exact path="/">
                    <Home setPick={setMyPick} />
                </Route>
                <Route exact path="/play">
                    <Play mine={myPick} house={housePick} score={gameScore} setScore={setGameScore} setHousePick={newHousePick}/>
                </Route>
                <Footer />
            </Router>
        </div>
    )
}
