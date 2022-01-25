import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "./components/Layout";

const ProtectedRouters = () => {
    const data = useContext(LoginContext);
    const isAuth = data.loggedIn;
    return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRouters;
