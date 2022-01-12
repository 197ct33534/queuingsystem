import React, { useState } from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { users } from "../../Assets/fakeData/userData";
export const SetPass = () => {
    const [email, setEmail] = useState("");
    const [isError, setisError] = useState(false);

    const handleSubmit = (e) => {
        const result = users.filter((user) => user.email === email);

        if (result.length > 0) {
            setisError(false);
            console.log("email chính xác");
        } else {
            e.preventDefault();
            setisError(true);

            console.log("email hông chích xác");
        }
    };
    return (
        <div className="setpassword login-left_form">
            <h1>Đặt lại mật khẩu</h1>

            <label htmlFor="" className="login-left_title">
                Vui lòng nhập email để đặt lại mật khẩu của bạn *
            </label>
            <input
                type="text"
                className={`login-left_input ${isError ? "error" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {isError ? (
                <div className="login-left_error">
                    <i className="bx bx-error-circle"></i>
                    <span>Tài khoản không hợp lệ</span>
                </div>
            ) : (
                ""
            )}
            <div className="warp-controler-btn">
                <Link to="/login">
                    <Button
                        type="button"
                        buttonSize="btn--large"
                        buttonStyle="btn--primary--outline"
                    >
                        Hủy
                    </Button>
                </Link>
                <Link to="/newPass">
                    <Button
                        type="button"
                        buttonSize="btn--large"
                        buttonStyle="btn--primary--solid"
                        onClick={handleSubmit}
                    >
                        Tiếp tục
                    </Button>
                </Link>
            </div>
        </div>
    );
};
