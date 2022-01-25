import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../router/Router";
import DashBoard from "./DashBoard";
export const LoginContext = createContext();
const Layout = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <BrowserRouter>
            <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
                <div className="grid wide">
                    <div className="home row no-gutters">
                        <DashBoard />

                        <Router />
                    </div>
                </div>
            </LoginContext.Provider>
        </BrowserRouter>
    );
};
export default Layout;
