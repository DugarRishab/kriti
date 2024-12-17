import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Events from "./screens/Events";
import "./App.css";

// For now I dont't know how to switch between the Home and Events components
// But you can see the Home on "\" endpoint and Events on "\events" endpoint

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                </Routes>
                <div className="bg-img"></div>
                <div className="bg-img2"></div>
                <div className="bg-img3"></div>
                <div className="bg-img4"></div>
                <div className="bg-img5"></div>
                <div className="bg-img6"></div>
            </div>
        </Router>
    );
};

export default App;
