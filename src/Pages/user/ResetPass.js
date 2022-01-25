import React, { useState } from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const ResetPass = () => {
    const [pass, setPass] = useState({
        pass1: "",
        pass2: "",
    });
    const [isError, setisError] = useState(false);
    const handleSubmit = (e) => {
        if (
            pass["pass1"] === pass["pass2"] &&
            pass["pass2"].split("").join("").length > 0
        ) {
            setisError(false);
            console.log("rest pass thành công");
        } else {
            e.preventDefault();
            setisError(true);
            console.log("rest pass thất bại");
        }
    };
    return (
        <div className="setpassword login-left_form">
            <h1>Đặt lại mật khẩu mới</h1>

            <label htmlFor="restpass1" className="login-left_title">
                Mật khẩu
            </label>
            <input
                type="password"
                id="restpass1"
                className={`login-left_input ${isError ? "error" : ""}`}
                value={pass["pass1"]}
                onChange={(e) => {
                    setPass({ ...pass, pass1: e.target.value });
                }}
            />
            <label htmlFor="restpass2" className="login-left_title">
                Nhập lại mật khẩu
            </label>
            <input
                type="password"
                id="restpass2"
                value={pass["pass2"]}
                onChange={(e) => {
                    setPass({ ...pass, pass2: e.target.value });
                }}
                className={`login-left_input ${isError ? "error" : ""}`}
            />

            {isError ? (
                <div className="login-left_error">
                    <i className="bx bx-error-circle"></i>
                    <span>Mật khẩu không trùng khớp</span>
                </div>
            ) : (
                ""
            )}
            <div className="warp-controler-btn center">
                <Link to="/user">
                    <Button
                        buttonSize="btn--large"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Xác nhận
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ResetPass;
