import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../views/home";

const Index = () => {
    return(
        <Routes>
 <Route path="/" element={<Home />} />
        </Routes>
    )
}
export default Index;