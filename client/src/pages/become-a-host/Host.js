import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Page_1 from "./Page_1";

function Host() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/page-1" element={<Page_1/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Host;