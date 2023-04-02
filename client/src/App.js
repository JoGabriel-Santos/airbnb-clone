import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Room from "./pages/Room";

function App() {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/room" element={<Room/>}/>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;