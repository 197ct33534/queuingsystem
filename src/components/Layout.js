import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../router/Router";
const Layout = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

export default Layout;
