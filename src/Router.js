import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
