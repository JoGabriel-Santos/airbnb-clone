import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Room from "./pages/Room";
import Host from "./pages/become-a-host/Host";

function App() {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/room" element={<Room/>}/>
                    <Route path="/become-a-host" element={<Host/>}/>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;