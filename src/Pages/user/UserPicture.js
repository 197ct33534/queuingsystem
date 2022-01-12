import React from "react";

const UserPicture = ({ pic, tittle }) => {
    return (
        <div className="login-right col l-7">
            <img src={pic} alt="" className="login-right_img" />
            <div className="login-right_title">
                <h4>{tittle ? "Hệ thống" : ""}</h4>
                <h1>{tittle}</h1>
            </div>
        </div>
    );
};

export default UserPicture;
