import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Home from "./Components/Home/Home";

import React from 'react';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;