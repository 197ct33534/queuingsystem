import React from "react";

import logo from "../../Assets/images/logo.png";

import FormLogin from "./FormLogin";
const UserLogin = ({ forgot, restpass }) => {
    return (
        <div className="login-left col l-5">
            <div className="login-logo">
                <img src={logo} alt="" />
            </div>
            {restpass ? (
                <FormLogin resetpass />
            ) : forgot ? (
                <FormLogin account password />
            ) : (
                <FormLogin email />
            )}
            {/* {forgot ? <FormLogin account password  /> : <FormLogin email />} */}
        </div>
    );
};

export default UserLogin;
